import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "AWS Essentials for Beginners",
  description: "Learn AWS essentials - the core Amazon Web Services for beginners. Understand EC2, S3, RDS, Lambda and other fundamental AWS services.",
  keywords: ["AWS tutorial", "AWS for beginners", "EC2", "S3", "RDS", "Lambda", "Amazon Web Services", "cloud deployment"],
  alternates: { canonical: "/full-stack-python/articles/aws-essentials" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/aws-essentials",
    title: "AWS Essentials: Core Services for Beginners",
    description: "Master the essential AWS services for Python developers.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-python", label: "Learn Full Stack Python", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AWS Essentials: Core Services for Beginners",
  "description": "Complete guide to essential AWS services",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-24",
  "dateModified": "2024-12-24"
} as const;

export default function FullStackPythonAwsEssentialsPage() {
  return (
    <>
      <JsonLd data={SCHEMA_1} />
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="article-hero">
          <div className="container">
            <div className="article-breadcrumb">
              <Link href="/">
                {"Home"}
              </Link>
              {" / "}
              <Link href="/full-stack-python">
                {"Full Stack Python"}
              </Link>
              {" / "}
              <span>
                {"AWS Essentials"}
              </span>
            </div>
            <h1>
              {"AWS Essentials"}
            </h1>
            <p className="article-subtitle">
              {"Core Services for Python Developers"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"18 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is AWS?"}
                </h2>
                <p>
                  {"Amazon Web Services (AWS) is the world's most comprehensive cloud platform, offering over 200 services. For beginners, you only need to know a handful of core services to get started."}
                </p>
                <p>
                  {"AWS offers a Free Tier that lets you explore many services for free for 12 months, making it perfect for learning."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Essential AWS Services"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Service          Purpose                   Free Tier
────────────────────────────────────────────────────────
EC2              Virtual servers           750 hrs/month
S3               File storage              5 GB
RDS              Managed databases         750 hrs/month
Lambda           Serverless functions      1M requests/month
DynamoDB         NoSQL database            25 GB
CloudFront       CDN                       50 GB transfer
Route 53         DNS                       Not free
IAM              Security/Access           Always free
CloudWatch       Monitoring                Basic free`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"EC2: Virtual Servers"}
                </h2>
                <p>
                  {"EC2 (Elastic Compute Cloud) provides resizable virtual servers in the cloud."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Launch an EC2 instance for your Python app:
1. Choose AMI (Amazon Machine Image)
   → Amazon Linux 2023 or Ubuntu 22.04

2. Choose Instance Type
   → t2.micro (Free Tier eligible)
   → t3.small for production

3. Configure Security Group
   → Allow SSH (port 22) from your IP
   → Allow HTTP (port 80) from anywhere
   → Allow HTTPS (port 443) from anywhere

4. Create Key Pair
   → Download .pem file (keep it safe!)

# Connect via SSH
chmod 400 my-key.pem
ssh -i my-key.pem ec2-user@your-public-ip

# Install Python and deploy
sudo yum update -y
sudo yum install python3 python3-pip -y
pip3 install gunicorn flask
python3 app.py`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"S3: Object Storage"}
                </h2>
                <p>
                  {"S3 (Simple Storage Service) stores files, images, backups - anything."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install AWS SDK for Python
pip install boto3

# Upload file to S3
import boto3

s3 = boto3.client('s3')

# Upload a file
s3.upload_file('local_file.jpg', 'my-bucket', 'images/photo.jpg')

# Download a file
s3.download_file('my-bucket', 'images/photo.jpg', 'downloaded.jpg')

# Generate presigned URL (for temporary access)
url = s3.generate_presigned_url(
    'get_object',
    Params={'Bucket': 'my-bucket', 'Key': 'images/photo.jpg'},
    ExpiresIn=3600  # 1 hour
)

# List objects in bucket
response = s3.list_objects_v2(Bucket='my-bucket')
for obj in response.get('Contents', []):
    print(obj['Key'])`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Common uses:"}
                  </strong>
                  {" Static website hosting, file uploads, backups, data lakes"}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"RDS: Managed Databases"}
                </h2>
                <p>
                  {"RDS (Relational Database Service) manages PostgreSQL, MySQL, and other databases for you."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Create RDS instance:
1. Choose engine: PostgreSQL (recommended for Python)
2. Choose template: Free Tier
3. DB instance identifier: myapp-db
4. Master username: admin
5. Master password: (secure password)
6. Instance type: db.t3.micro
7. Storage: 20 GB
8. VPC: Default VPC
9. Public access: No (use VPC)

# Connect from Python
import psycopg2

conn = psycopg2.connect(
    host="myapp-db.xxxx.us-east-1.rds.amazonaws.com",
    database="myapp",
    user="admin",
    password="your-password"
)

# With SQLAlchemy
DATABASE_URL = "postgresql://admin:password@myapp-db.xxxx.rds.amazonaws.com/myapp"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Lambda: Serverless Functions"}
                </h2>
                <p>
                  {"Run code without managing servers. Perfect for event-driven workloads."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Lambda function (Python)
import json

def lambda_handler(event, context):
    # event contains the input data
    name = event.get('name', 'World')

    return {
        'statusCode': 200,
        'body': json.dumps(f'Hello, {name}!')
    }

# Triggers:
# - API Gateway (HTTP requests)
# - S3 (file uploads)
# - DynamoDB (database changes)
# - CloudWatch Events (scheduled)
# - SNS/SQS (messages)

# Deploy with AWS CLI
aws lambda create-function \\
    --function-name my-function \\
    --runtime python3.11 \\
    --handler lambda_function.lambda_handler \\
    --zip-file fileb://function.zip \\
    --role arn:aws:iam::123456789:role/lambda-role`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"IAM: Security"}
                </h2>
                <p>
                  {"IAM (Identity and Access Management) controls who can access what in your AWS account."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Key concepts:
Users     - Individual people/services
Groups    - Collections of users
Roles     - Temporary permissions for services
Policies  - JSON documents defining permissions

# Example policy: Allow S3 read access
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::my-bucket",
                "arn:aws:s3:::my-bucket/*"
            ]
        }
    ]
}

# Best practices:
1. Never use root account for daily tasks
2. Enable MFA on all accounts
3. Use roles instead of access keys when possible
4. Follow principle of least privilege
5. Rotate access keys regularly`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Elastic Beanstalk: Easy Deployment"}
                </h2>
                <p>
                  {"Easiest way to deploy Python apps to AWS. Just upload your code."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install EB CLI
pip install awsebcli

# Initialize your project
cd myapp
eb init

# Create environment and deploy
eb create my-env
eb deploy

# View your app
eb open

# Required files:
# requirements.txt - Python dependencies
# application.py - Your Flask/FastAPI app

# Example application.py for Flask
from flask import Flask
application = Flask(__name__)  # Must be named 'application'

@application.route('/')
def home():
    return 'Hello from Elastic Beanstalk!'

if __name__ == '__main__':
    application.run()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Typical Python App Architecture"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────┐
│                         Users                            │
└───────────────────────────┬─────────────────────────────┘
                            │
                    ┌───────┴───────┐
                    │   Route 53    │  DNS
                    │  (optional)   │
                    └───────┬───────┘
                            │
                    ┌───────┴───────┐
                    │  CloudFront   │  CDN (optional)
                    └───────┬───────┘
                            │
         ┌──────────────────┴──────────────────┐
         │                                      │
┌────────┴────────┐                    ┌───────┴───────┐
│  S3 (Static)    │                    │ Load Balancer │
│  CSS, JS, Images│                    │               │
└─────────────────┘                    └───────┬───────┘
                                               │
                    ┌──────────────────────────┼──────────────────────────┐
                    │                          │                          │
           ┌────────┴────────┐       ┌────────┴────────┐       ┌────────┴────────┐
           │   EC2 / ECS     │       │   EC2 / ECS     │       │   EC2 / ECS     │
           │  (Python App)   │       │  (Python App)   │       │  (Python App)   │
           └────────┬────────┘       └────────┬────────┘       └────────┬────────┘
                    │                          │                          │
                    └──────────────────────────┼──────────────────────────┘
                                               │
                              ┌────────────────┴────────────────┐
                              │                                  │
                     ┌────────┴────────┐              ┌─────────┴─────────┐
                     │    RDS          │              │    ElastiCache    │
                     │  (PostgreSQL)   │              │    (Redis)        │
                     └─────────────────┘              └───────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"AWS CLI Essentials"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install AWS CLI
pip install awscli

# Configure credentials
aws configure
# Enter Access Key ID, Secret Key, Region

# Common commands
aws s3 ls                          # List S3 buckets
aws s3 cp file.txt s3://bucket/    # Upload to S3
aws ec2 describe-instances         # List EC2 instances
aws rds describe-db-instances      # List RDS databases
aws lambda list-functions          # List Lambda functions

# Use profiles for multiple accounts
aws configure --profile production
aws s3 ls --profile production`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Cost Management Tips"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use Free Tier:"}
                    </strong>
                    {" Monitor usage to stay within limits"}
                  </li>
                  <li>
                    <strong>
                      {"Set billing alerts:"}
                    </strong>
                    {" Get notified before charges spike"}
                  </li>
                  <li>
                    <strong>
                      {"Stop unused resources:"}
                    </strong>
                    {" Turn off dev instances at night"}
                  </li>
                  <li>
                    <strong>
                      {"Right-size instances:"}
                    </strong>
                    {" Don't over-provision"}
                  </li>
                  <li>
                    <strong>
                      {"Use Reserved Instances:"}
                    </strong>
                    {" Save 30-75% for steady workloads"}
                  </li>
                  <li>
                    <strong>
                      {"Use Spot Instances:"}
                    </strong>
                    {" Save up to 90% for flexible workloads"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master AWS with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers AWS deployment and cloud services. Learn to deploy scalable Python applications with personalized guidance."}
                </p>
                <Link href="/full-stack-python" className="btn btn-primary">
                  {"Explore Full Stack Python Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-python/articles/cloud-computing" className="related-article-card">
                    <h4>
                      {"Cloud Computing"}
                    </h4>
                    {" "}
                    <p>
                      {"Cloud fundamentals"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/docker" className="related-article-card">
                    <h4>
                      {"Docker"}
                    </h4>
                    {" "}
                    <p>
                      {"Container deployment"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/cicd" className="related-article-card">
                    <h4>
                      {"CI/CD"}
                    </h4>
                    {" "}
                    <p>
                      {"Automated deployment"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn AWS."} />
    </>
  );
}
