pipeline {
    agent {
        label 'uk-website' 
    }
    
    triggers {
        pollSCM('*/5 * * * *')
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/prosoft-devops/UK-website/tree/main'
            }
        }
        
        stage('Build') {
            steps {
                sh 'echo "Building static website..."'
            }
        }
        
        stage('Deploy') {
            steps {
                script {

                    sh 'docker stop website-container || true'
                    sh 'docker rm website-container || true'
                    

                    sh 'docker build -t website-image .'
                    

                    sh 'docker run -d -p 80:80 --name website-container website-image'
                }
            }
        }
    }
}
