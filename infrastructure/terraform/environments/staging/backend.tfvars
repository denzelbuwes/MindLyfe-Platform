bucket         = "mindlyfe-terraform-state-staging"
key            = "terraform.tfstate"
region         = "us-east-1"
encrypt        = true
dynamodb_table = "mindlyfe-terraform-locks-staging"