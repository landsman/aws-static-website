# AWS static website

**Work in progress**

## What we achieve

- Website with free SSL certificate and CDN for great speed
- Same staging environment for your testing
- Automated deployment
- Easy and productive stack based on Gatsby.js, written in React

## What do you need

- Github repository (can be private)
- Activate Github Actions
- Created AWS account
- installed GIT
- installed Node.js

## Tutorial

1. create AWS account
2. create Route 53 hosted zone
3. setup NSSET, server DNS for your domain to provided NS values
4. request certificate in ACM for your domain (domain.com, www.domain.com, stage.domain.com)
5. download CSV with DNS CNAMEs for validate requested domain via DNS in Route 53
6. insert these CNAMES in Route 53
7. create two S3 buckets: domain.com, stage.domain.com with public access
8. allow static hosting for these buckets and provide index.html, error.html as default pages
9. create Web CloudFront Distributions

    - Origin Domain Name: your S3 bucket domain.com
    - Viewer Protocol Policy: Redirect HTTP to HTTPS
    - Alternate Domain Names (CNAMEs): domain.com, www.domain.com
    - SSL Certificate: Custom SSL Certificate (example.com) and select certificate for your domain
    - Default Root Object: index.html

10. [My Security Credentials](https://console.aws.amazon.com/iam/home?#/security_credentials) and click to "Access keys (access key ID and secret access key)", click to "Create New Access Key".
11. on your github repository go to Settings -> Secrets -> Add a new secret.

    Fill there:

    - AWS_REGION
    - AWS_ACCESS_KEY_ID
    - AWS_SECRET_ACCESS_KEY

    - AWS_BUCKET
    - CLOUDFRONT_DISTRIBUTION
    - STAGE_AWS_BUCKET
    - STAGE_CLOUDFRONT_DISTRIBUTION

12. connect CloudFront with Route53 - fill A-type rows: domain.com, www.domain.com, stage.domain.com
13. let's try do git commit & push to github repository and check Actions tab.