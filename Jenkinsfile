pipeline {
    agent {
        label 'uk-website' // Run on a node with the label 'uk-website' (assuming your Docker agent template is labeled as such)
    }
    
    triggers {
        pollSCM('*/5 * * * *') // Poll SCM every five minutes
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/yourusername/yourrepository.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'echo "Building static website..."'
                // Add commands to build your static website here
                // For example, if it's a simple HTML/CSS/JS website, you might just need to copy files to a specific directory
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Stop and remove the existing container (if any)
                    sh 'docker stop website-container || true'
                    sh 'docker rm website-container || true'
                    
                    // Build the Docker image for the website
                    sh 'docker build -t website-image .'
                    
                    // Run the Docker container with the built image
                    sh 'docker run -d -p 80:80 --name website-container website-image'
                }
            }
        }
    }
}
