import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Terraform for Data Engineering",
  description: "Learn Terraform for data engineering - Infrastructure as Code for AWS, GCP, Azure. Provision data lakes, warehouses, and pipelines programmatically.",
  keywords: ["Terraform tutorial", "Infrastructure as Code", "IaC", "AWS Terraform", "data infrastructure", "cloud provisioning"],
  alternates: { canonical: "/data-engineering/articles/terraform" },
  openGraph: {
    type: "article",
    url: "/data-engineering/articles/terraform",
    title: "Terraform: Infrastructure as Code for Data Engineering",
    description: "Master Terraform for provisioning data infrastructure.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-engineering", label: "Learn Data Engineering", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Terraform: Infrastructure as Code for Data Engineering",
  "description": "Complete guide to Terraform for data infrastructure",
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

export default function DataEngineeringTerraformPage() {
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
              <Link href="/data-engineering">
                {"Data Engineering"}
              </Link>
              {" / "}
              <span>
                {"Terraform"}
              </span>
            </div>
            <h1>
              {"Terraform"}
            </h1>
            <p className="article-subtitle">
              {"Infrastructure as Code for Data Engineering"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"16 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Terraform?"}
                </h2>
                <p>
                  {"Terraform is an Infrastructure as Code (IaC) tool that lets you define and provision cloud infrastructure using a declarative configuration language called HCL (HashiCorp Configuration Language)."}
                </p>
                <p>
                  {"For data engineers, Terraform enables reproducible infrastructure: data lakes, warehouses, Kafka clusters, and processing pipelines - all defined in code and version controlled."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why IaC for Data Engineering?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Reproducibility:"}
                    </strong>
                    {" Recreate entire environments from code"}
                  </li>
                  <li>
                    <strong>
                      {"Version Control:"}
                    </strong>
                    {" Track infrastructure changes in Git"}
                  </li>
                  <li>
                    <strong>
                      {"Consistency:"}
                    </strong>
                    {" Dev, staging, and prod from same templates"}
                  </li>
                  <li>
                    <strong>
                      {"Automation:"}
                    </strong>
                    {" CI/CD for infrastructure changes"}
                  </li>
                  <li>
                    <strong>
                      {"Documentation:"}
                    </strong>
                    {" Code IS the documentation"}
                  </li>
                  <li>
                    <strong>
                      {"Cost Control:"}
                    </strong>
                    {" Easily spin up/down environments"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Terraform
# macOS
brew install terraform

# Windows
choco install terraform

# Linux
sudo apt-get install terraform

# Verify installation
terraform --version

# Basic workflow
terraform init      # Initialize, download providers
terraform plan      # Preview changes
terraform apply     # Apply changes
terraform destroy   # Tear down infrastructure

# Project structure
data-platform/
├── main.tf           # Main configuration
├── variables.tf      # Variable definitions
├── outputs.tf        # Output values
├── terraform.tfvars  # Variable values
├── modules/          # Reusable modules
│   ├── s3-bucket/
│   ├── redshift/
│   └── glue/
└── environments/
    ├── dev/
    ├── staging/
    └── prod/`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"AWS Data Lake Infrastructure"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# main.tf - Data Lake on AWS

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "my-terraform-state"
    key    = "data-lake/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.aws_region
}

# S3 Bucket for Data Lake
resource "aws_s3_bucket" "data_lake" {
  bucket = "\${var.project_name}-data-lake-\${var.environment}"

  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}

# Bucket versioning for data protection
resource "aws_s3_bucket_versioning" "data_lake" {
  bucket = aws_s3_bucket.data_lake.id
  versioning_configuration {
    status = "Enabled"
  }
}

# Lifecycle rules for cost optimization
resource "aws_s3_bucket_lifecycle_configuration" "data_lake" {
  bucket = aws_s3_bucket.data_lake.id

  rule {
    id     = "bronze-tier"
    status = "Enabled"

    filter {
      prefix = "bronze/"
    }

    transition {
      days          = 30
      storage_class = "STANDARD_IA"
    }

    transition {
      days          = 90
      storage_class = "GLACIER"
    }
  }
}

# Glue Catalog Database
resource "aws_glue_catalog_database" "analytics" {
  name        = "\${var.project_name}_\${var.environment}"
  description = "Data catalog for analytics"
}

# IAM Role for Glue
resource "aws_iam_role" "glue_role" {
  name = "\${var.project_name}-glue-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "glue.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "glue_service" {
  role       = aws_iam_role.glue_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSGlueServiceRole"
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Redshift Data Warehouse"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Redshift cluster
resource "aws_redshift_cluster" "warehouse" {
  cluster_identifier = "\${var.project_name}-warehouse"
  database_name      = "analytics"
  master_username    = var.redshift_master_user
  master_password    = var.redshift_master_password

  node_type         = var.redshift_node_type
  cluster_type      = "multi-node"
  number_of_nodes   = var.redshift_nodes

  vpc_security_group_ids = [aws_security_group.redshift.id]
  cluster_subnet_group_name = aws_redshift_subnet_group.main.name

  skip_final_snapshot = var.environment != "prod"
  final_snapshot_identifier = var.environment == "prod" ? "\${var.project_name}-final-snapshot" : null

  # Encryption
  encrypted  = true
  kms_key_id = aws_kms_key.redshift.arn

  # Enhanced VPC routing for S3 access
  enhanced_vpc_routing = true

  tags = {
    Environment = var.environment
  }
}

# Security group for Redshift
resource "aws_security_group" "redshift" {
  name        = "\${var.project_name}-redshift-sg"
  description = "Security group for Redshift"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port       = 5439
    to_port         = 5439
    protocol        = "tcp"
    security_groups = [aws_security_group.app.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Redshift Spectrum - Query S3 directly
resource "aws_redshift_cluster_iam_roles" "spectrum" {
  cluster_identifier = aws_redshift_cluster.warehouse.cluster_identifier
  iam_role_arns      = [aws_iam_role.redshift_spectrum.arn]
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Variables and Outputs"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# variables.tf
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod."
  }
}

variable "project_name" {
  description = "Project name for resource naming"
  type        = string
}

variable "redshift_node_type" {
  description = "Redshift node type"
  type        = string
  default     = "dc2.large"
}

variable "redshift_nodes" {
  description = "Number of Redshift nodes"
  type        = number
  default     = 2
}

# outputs.tf
output "data_lake_bucket" {
  description = "S3 bucket for data lake"
  value       = aws_s3_bucket.data_lake.bucket
}

output "redshift_endpoint" {
  description = "Redshift cluster endpoint"
  value       = aws_redshift_cluster.warehouse.endpoint
  sensitive   = true
}

output "glue_database" {
  description = "Glue catalog database name"
  value       = aws_glue_catalog_database.analytics.name
}

# terraform.tfvars
environment    = "dev"
project_name   = "analytics"
aws_region     = "us-east-1"
redshift_nodes = 2`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Modules for Reusability"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# modules/s3-data-bucket/main.tf
variable "bucket_name" {
  type = string
}

variable "environment" {
  type = string
}

resource "aws_s3_bucket" "this" {
  bucket = var.bucket_name
  tags = {
    Environment = var.environment
  }
}

resource "aws_s3_bucket_versioning" "this" {
  bucket = aws_s3_bucket.this.id
  versioning_configuration {
    status = "Enabled"
  }
}

output "bucket_arn" {
  value = aws_s3_bucket.this.arn
}

output "bucket_name" {
  value = aws_s3_bucket.this.bucket
}

# Using the module in main.tf
module "bronze_bucket" {
  source      = "./modules/s3-data-bucket"
  bucket_name = "\${var.project_name}-bronze-\${var.environment}"
  environment = var.environment
}

module "silver_bucket" {
  source      = "./modules/s3-data-bucket"
  bucket_name = "\${var.project_name}-silver-\${var.environment}"
  environment = var.environment
}

module "gold_bucket" {
  source      = "./modules/s3-data-bucket"
  bucket_name = "\${var.project_name}-gold-\${var.environment}"
  environment = var.environment
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"State Management"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Remote state storage (recommended for teams)
terraform {
  backend "s3" {
    bucket         = "terraform-state-bucket"
    key            = "data-platform/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-locks"  # For state locking
  }
}

# DynamoDB table for state locking
resource "aws_dynamodb_table" "terraform_locks" {
  name         = "terraform-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}

# Workspaces for multiple environments
# terraform workspace new dev
# terraform workspace new prod
# terraform workspace select dev

# Use workspace in configuration
locals {
  environment = terraform.workspace
}

resource "aws_s3_bucket" "data" {
  bucket = "data-\${local.environment}"
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use remote state:"}
                    </strong>
                    {" Store state in S3/GCS with locking"}
                  </li>
                  <li>
                    <strong>
                      {"Modularize:"}
                    </strong>
                    {" Create reusable modules for common patterns"}
                  </li>
                  <li>
                    <strong>
                      {"Use variables:"}
                    </strong>
                    {" Never hardcode values"}
                  </li>
                  <li>
                    <strong>
                      {"Sensitive data:"}
                    </strong>
                    {" Use secrets manager, not tfvars"}
                  </li>
                  <li>
                    <strong>
                      {"Plan before apply:"}
                    </strong>
                    {" Always review terraform plan"}
                  </li>
                  <li>
                    <strong>
                      {"Version lock:"}
                    </strong>
                    {" Pin provider and module versions"}
                  </li>
                  <li>
                    <strong>
                      {"Tagging:"}
                    </strong>
                    {" Tag all resources for cost tracking"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Terraform"}
                </h2>
                <p>
                  {"Our Data Engineering program covers IaC and cloud infrastructure provisioning."}
                </p>
                <Link href="/data-engineering" className="btn btn-primary">
                  {"Explore Data Engineering Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/data-engineering/articles/aws-data-engineering" className="related-article-card">
                    <h4>
                      {"AWS Data Services"}
                    </h4>
                    {" "}
                    <p>
                      {"Cloud data platform"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/docker" className="related-article-card">
                    <h4>
                      {"Docker"}
                    </h4>
                    {" "}
                    <p>
                      {"Containerization"}
                    </p>
                  </Link>
                  <Link href="/data-engineering/articles/data-lakes" className="related-article-card">
                    <h4>
                      {"Data Lakes"}
                    </h4>
                    {" "}
                    <p>
                      {"Lake architecture"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Terraform."} />
    </>
  );
}
