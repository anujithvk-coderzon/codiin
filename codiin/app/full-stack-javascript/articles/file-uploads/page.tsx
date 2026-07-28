import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "File Uploads - Full Stack JavaScript | Codiin",
  alternates: { canonical: "/full-stack-javascript/articles/file-uploads" },
  openGraph: {
    type: "website",
    url: "/full-stack-javascript/articles/file-uploads",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function FullStackJavascriptFileUploadsPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        <div className="container">
          <article className="article-content">
            <header className="article-header">
              <Link href="/full-stack-javascript" className="back-link">
                {"← Back to Full Stack JavaScript"}
              </Link>
              <h1>
                {"File Uploads"}
              </h1>
              <p className="article-meta">
                {"Handling file uploads with Multer and cloud storage"}
              </p>
            </header>
            <section className="article-body">
              <h2>
                {"File Upload Basics"}
              </h2>
              <p>
                {"File uploads involve receiving files from clients, validating them, and storing them either locally or in cloud storage. This guide covers server-side handling with Express/Multer and client-side implementation in React."}
              </p>
              <h2>
                {"Server-Side with Multer"}
              </h2>
              <h3>
                {"Basic Setup"}
              </h3>
              <pre><code>{`# Install multer
npm install multer

// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Basic memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// Single file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  console.log('File:', req.file);
  // {
  //   fieldname: 'file',
  //   originalname: 'photo.jpg',
  //   encoding: '7bit',
  //   mimetype: 'image/jpeg',
  //   buffer: <Buffer ...>,
  //   size: 12345
  // }

  res.json({
    message: 'File uploaded successfully',
    filename: req.file.originalname,
    size: req.file.size,
  });
});`}</code></pre>
              <h3>
                {"Disk Storage Configuration"}
              </h3>
              <pre><code>{`const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Dynamic destination based on file type
    let uploadPath = 'uploads/';
    if (file.mimetype.startsWith('image/')) {
      uploadPath += 'images/';
    } else if (file.mimetype === 'application/pdf') {
      uploadPath += 'documents/';
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
    files: 5, // Max 5 files
  },
  fileFilter: (req, file, cb) => {
    // Allowed file types
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  },
});

// Multiple file uploads
app.post('/upload/multiple', upload.array('files', 5), (req, res) => {
  res.json({
    message: \`\${req.files.length} files uploaded\`,
    files: req.files.map(f => ({
      filename: f.filename,
      path: f.path,
      size: f.size,
    })),
  });
});

// Multiple fields
app.post('/upload/fields', upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'documents', maxCount: 5 },
]), (req, res) => {
  res.json({
    avatar: req.files['avatar']?.[0],
    documents: req.files['documents'],
  });
});`}</code></pre>
              <h3>
                {"File Validation"}
              </h3>
              <pre><code>{`const fileFilter = (req, file, cb) => {
  // Check file extension
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.pdf'];
  const ext = path.extname(file.originalname).toLowerCase();

  if (!allowedExtensions.includes(ext)) {
    return cb(new Error(\`File type \${ext} not allowed\`), false);
  }

  // Check MIME type
  const allowedMimes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
  ];

  if (!allowedMimes.includes(file.mimetype)) {
    return cb(new Error('Invalid MIME type'), false);
  }

  cb(null, true);
};

// Validate file content (magic bytes)
const validateFileContent = async (buffer, mimeType) => {
  const fileType = await import('file-type');
  const detected = await fileType.fileTypeFromBuffer(buffer);

  if (!detected || detected.mime !== mimeType) {
    throw new Error('File content does not match declared type');
  }

  return true;
};

// Use in route
app.post('/upload/secure', upload.single('file'), async (req, res) => {
  try {
    await validateFileContent(req.file.buffer, req.file.mimetype);

    // Process file...
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`}</code></pre>
              <h3>
                {"Error Handling"}
              </h3>
              <pre><code>{`// Multer error handling middleware
const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    switch (err.code) {
      case 'LIMIT_FILE_SIZE':
        return res.status(400).json({
          error: 'File too large',
          maxSize: '10MB',
        });
      case 'LIMIT_FILE_COUNT':
        return res.status(400).json({
          error: 'Too many files',
          maxFiles: 5,
        });
      case 'LIMIT_UNEXPECTED_FILE':
        return res.status(400).json({
          error: 'Unexpected field name',
        });
      default:
        return res.status(400).json({
          error: err.message,
        });
    }
  }

  if (err) {
    return res.status(400).json({ error: err.message });
  }

  next();
};

// Apply middleware
app.post('/upload',
  upload.single('file'),
  handleMulterError,
  (req, res) => {
    // Handle successful upload
  }
);`}</code></pre>
              <h2>
                {"Cloud Storage with AWS S3"}
              </h2>
              <h3>
                {"Setup and Configuration"}
              </h3>
              <pre><code>{`# Install AWS SDK
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner

// config/s3.js
const { S3Client } = require('@aws-sdk/client-s3');

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

module.exports = s3Client;`}</code></pre>
              <h3>
                {"Upload to S3"}
              </h3>
              <pre><code>{`const { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const { v4: uuidv4 } = require('uuid');
const s3Client = require('./config/s3');

const BUCKET_NAME = process.env.AWS_S3_BUCKET;

// Upload file to S3
async function uploadToS3(file, folder = 'uploads') {
  const key = \`\${folder}/\${uuidv4()}-\${file.originalname}\`;

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
    // Make public (optional)
    // ACL: 'public-read',
  });

  await s3Client.send(command);

  return {
    key,
    url: \`https://\${BUCKET_NAME}.s3.amazonaws.com/\${key}\`,
  };
}

// Generate signed URL for private files
async function getSignedDownloadUrl(key, expiresIn = 3600) {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  return getSignedUrl(s3Client, command, { expiresIn });
}

// Delete file from S3
async function deleteFromS3(key) {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  await s3Client.send(command);
}

// Route handler
app.post('/upload/s3', upload.single('file'), async (req, res) => {
  try {
    const result = await uploadToS3(req.file, 'images');

    // Save to database
    const fileRecord = await File.create({
      originalName: req.file.originalname,
      key: result.key,
      url: result.url,
      size: req.file.size,
      mimeType: req.file.mimetype,
      uploadedBy: req.user.id,
    });

    res.json({
      id: fileRecord._id,
      url: result.url,
    });
  } catch (error) {
    console.error('S3 upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
});`}</code></pre>
              <h3>
                {"Presigned URLs for Direct Upload"}
              </h3>
              <pre><code>{`const { PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

// Generate presigned URL for client-side upload
app.post('/upload/presigned', async (req, res) => {
  const { filename, contentType } = req.body;

  const key = \`uploads/\${uuidv4()}-\${filename}\`;

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });

  const uploadUrl = await getSignedUrl(s3Client, command, {
    expiresIn: 300, // 5 minutes
  });

  res.json({
    uploadUrl,
    key,
    fileUrl: \`https://\${BUCKET_NAME}.s3.amazonaws.com/\${key}\`,
  });
});

// Client-side direct upload
async function uploadDirectToS3(file) {
  // 1. Get presigned URL from server
  const { uploadUrl, key, fileUrl } = await fetch('/api/upload/presigned', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      filename: file.name,
      contentType: file.type,
    }),
  }).then(r => r.json());

  // 2. Upload directly to S3
  await fetch(uploadUrl, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    },
  });

  // 3. Return the file URL
  return { key, url: fileUrl };
}`}</code></pre>
              <h2>
                {"React File Upload Components"}
              </h2>
              <h3>
                {"Basic File Input"}
              </h3>
              <pre><code>{`function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Client-side validation
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        return;
      }

      if (!['image/jpeg', 'image/png'].includes(selectedFile.type)) {
        setError('Only JPEG and PNG files allowed');
        return;
      }

      setFile(selectedFile);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        // Track upload progress with XMLHttpRequest
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      console.log('Uploaded:', result);
      setFile(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/jpeg,image/png"
        disabled={uploading}
      />

      {file && (
        <div className="file-info">
          <p>{file.name} ({(file.size / 1024).toFixed(1)} KB)</p>
          <button onClick={handleUpload} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      )}

      {uploading && (
        <div className="progress-bar">
          <div style={{ width: \`\${progress}%\` }} />
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}`}</code></pre>
              <h3>
                {"Drag and Drop Upload"}
              </h3>
              <pre><code>{`function DragDropUpload({ onUpload }) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFiles = (newFiles) => {
    const validFiles = newFiles.filter(file => {
      // Validate file type and size
      const isValidType = ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type);
      const isValidSize = file.size <= 10 * 1024 * 1024;
      return isValidType && isValidSize;
    });

    setFiles(prev => [...prev, ...validFiles.map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      preview: file.type.startsWith('image/')
        ? URL.createObjectURL(file)
        : null,
      status: 'pending',
      progress: 0,
    }))]);
  };

  const uploadFile = async (fileItem) => {
    const formData = new FormData();
    formData.append('file', fileItem.file);

    setFiles(prev => prev.map(f =>
      f.id === fileItem.id ? { ...f, status: 'uploading' } : f
    ));

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      setFiles(prev => prev.map(f =>
        f.id === fileItem.id
          ? { ...f, status: 'complete', url: result.url }
          : f
      ));

      onUpload?.(result);
    } catch (error) {
      setFiles(prev => prev.map(f =>
        f.id === fileItem.id
          ? { ...f, status: 'error', error: error.message }
          : f
      ));
    }
  };

  const removeFile = (id) => {
    setFiles(prev => {
      const file = prev.find(f => f.id === id);
      if (file?.preview) {
        URL.revokeObjectURL(file.preview);
      }
      return prev.filter(f => f.id !== id);
    });
  };

  const uploadAll = () => {
    files
      .filter(f => f.status === 'pending')
      .forEach(uploadFile);
  };

  return (
    <div className="drag-drop-upload">
      <div
        className={\`drop-zone \${isDragging ? 'dragging' : ''}\`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Drag files here or click to browse</p>
        <input
          type="file"
          multiple
          onChange={(e) => handleFiles(Array.from(e.target.files))}
          style={{ display: 'none' }}
          id="file-input"
        />
        <label htmlFor="file-input" className="browse-btn">
          Browse Files
        </label>
      </div>

      {files.length > 0 && (
        <div className="file-list">
          {files.map(fileItem => (
            <div key={fileItem.id} className="file-item">
              {fileItem.preview && (
                <img src={fileItem.preview} alt="" className="preview" />
              )}
              <div className="file-details">
                <span>{fileItem.file.name}</span>
                <span className={\`status \${fileItem.status}\`}>
                  {fileItem.status}
                </span>
              </div>
              <button onClick={() => removeFile(fileItem.id)}>×</button>
            </div>
          ))}

          <button onClick={uploadAll}>Upload All</button>
        </div>
      )}
    </div>
  );
}`}</code></pre>
              <h3>
                {"Upload with Progress"}
              </h3>
              <pre><code>{`function uploadWithProgress(file, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', file);

    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        const progress = Math.round((e.loaded / e.total) * 100);
        onProgress(progress);
      }
    });

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(\`Upload failed: \${xhr.status}\`));
      }
    });

    xhr.addEventListener('error', () => {
      reject(new Error('Network error'));
    });

    xhr.open('POST', '/api/upload');
    xhr.send(formData);
  });
}

// Usage in component
const [progress, setProgress] = useState(0);

const handleUpload = async (file) => {
  try {
    const result = await uploadWithProgress(file, setProgress);
    console.log('Uploaded:', result);
  } catch (error) {
    console.error('Upload error:', error);
  }
};`}</code></pre>
              <h2>
                {"Image Processing"}
              </h2>
              <pre><code>{`# Install sharp for image processing
npm install sharp

const sharp = require('sharp');

// Resize and optimize image
async function processImage(buffer, options = {}) {
  const {
    width = 800,
    height = 600,
    quality = 80,
    format = 'jpeg',
  } = options;

  let pipeline = sharp(buffer);

  // Resize
  pipeline = pipeline.resize(width, height, {
    fit: 'inside',
    withoutEnlargement: true,
  });

  // Convert format and compress
  switch (format) {
    case 'jpeg':
      pipeline = pipeline.jpeg({ quality });
      break;
    case 'png':
      pipeline = pipeline.png({ compressionLevel: 9 });
      break;
    case 'webp':
      pipeline = pipeline.webp({ quality });
      break;
  }

  return pipeline.toBuffer();
}

// Generate multiple sizes
async function generateThumbnails(buffer) {
  const sizes = {
    thumbnail: { width: 150, height: 150 },
    medium: { width: 500, height: 500 },
    large: { width: 1200, height: 1200 },
  };

  const results = {};

  for (const [name, dimensions] of Object.entries(sizes)) {
    results[name] = await sharp(buffer)
      .resize(dimensions.width, dimensions.height, {
        fit: 'cover',
        position: 'centre',
      })
      .jpeg({ quality: 80 })
      .toBuffer();
  }

  return results;
}

// Usage in upload route
app.post('/upload/image', upload.single('image'), async (req, res) => {
  try {
    const thumbnails = await generateThumbnails(req.file.buffer);

    // Upload each size to S3
    const uploads = await Promise.all(
      Object.entries(thumbnails).map(async ([size, buffer]) => {
        return uploadToS3(
          { buffer, originalname: \`\${size}.jpg\`, mimetype: 'image/jpeg' },
          \`images/\${req.file.originalname}\`,
        );
      })
    );

    res.json({ images: uploads });
  } catch (error) {
    res.status(500).json({ error: 'Image processing failed' });
  }
});`}</code></pre>
              <h2>
                {"Security Best Practices"}
              </h2>
              <pre><code>{`// 1. Validate file type (both extension and MIME type)
const ALLOWED_TYPES = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'application/pdf': ['.pdf'],
};

function validateFileType(file) {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowedExts = ALLOWED_TYPES[file.mimetype];

  if (!allowedExts || !allowedExts.includes(ext)) {
    throw new Error('Invalid file type');
  }
}

// 2. Scan for malware (using ClamAV)
const NodeClam = require('clamscan');

const clam = new NodeClam().init({
  clamdscan: { host: 'localhost', port: 3310 },
});

async function scanFile(buffer) {
  const { isInfected, viruses } = await clam.scanStream(buffer);
  if (isInfected) {
    throw new Error(\`Malware detected: \${viruses.join(', ')}\`);
  }
}

// 3. Generate unique filenames (prevent overwrites)
function generateSecureFilename(originalname) {
  const ext = path.extname(originalname);
  return \`\${uuidv4()}\${ext}\`;
}

// 4. Store files outside web root
const UPLOAD_DIR = path.join(__dirname, '..', 'storage', 'uploads');

// 5. Set proper Content-Type and Content-Disposition headers
app.get('/download/:id', async (req, res) => {
  const file = await File.findById(req.params.id);

  res.setHeader('Content-Type', file.mimeType);
  res.setHeader(
    'Content-Disposition',
    \`attachment; filename="\${file.originalName}"\`
  );

  // Stream file
  const stream = fs.createReadStream(file.path);
  stream.pipe(res);
});

// 6. Limit upload rate
const rateLimit = require('express-rate-limit');

const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 uploads per window
  message: 'Too many uploads, please try again later',
});

app.post('/upload', uploadLimiter, upload.single('file'), ...);`}</code></pre>
              <div className="key-takeaways">
                <h3>
                  {"Key Takeaways"}
                </h3>
                <ul>
                  <li>
                    {"Use Multer for handling multipart/form-data uploads"}
                  </li>
                  <li>
                    {"Validate file types on both client and server side"}
                  </li>
                  <li>
                    {"Use cloud storage (S3) for production applications"}
                  </li>
                  <li>
                    {"Presigned URLs enable secure direct uploads to S3"}
                  </li>
                  <li>
                    {"Process images server-side with Sharp for optimization"}
                  </li>
                  <li>
                    {"Implement progress tracking for better UX"}
                  </li>
                  <li>
                    {"Generate unique filenames to prevent overwrites"}
                  </li>
                  <li>
                    {"Rate limit uploads to prevent abuse"}
                  </li>
                </ul>
              </div>
            </section>
            <nav className="article-nav">
              <Link href="/full-stack-javascript/articles/environment-variables" className="prev-article">
                {"← Environment Variables"}
              </Link>
              <Link href="/full-stack-javascript/articles/microservices" className="next-article">
                {"Microservices →"}
              </Link>
            </nav>
          </article>
        </div>
      </main>

      <Footer variant="article" />

    </>
  );
}
