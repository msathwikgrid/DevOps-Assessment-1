**Performance-Assessment1**
Task:
To create a React-based static website, containerize it using a multi-stage Dockerfile, and serve it using an NGINX container running locally.

**Work Distribution**
Himanshu:
Designed and developed the static website using React.
Created a simple UI displaying the Grid Dynamics logo and a welcome message.

Madala Sathwik:
Wrote a multi-stage Dockerfile to build the React app and serve it using NGINX.
Build and run the Docker container to serve the static website locally via port 3000.

Verified application functionality and documented the build/run process.

**Steps Performed:**
1. React Application Setup
Created a new React app.
Added a logo and welcome message to the interface.

2. Dockerfile Creation
Created a multi-stage Dockerfile:
First stage used Node.js to build the React app.
Second stage used NGINX to serve the static files.

3. Building Docker Image
Used Docker CLI to build the image locally from the Dockerfile.
docker build -t grid-react-app .

5. Running the Docker Container
Started the container on port 3000.
docker run -p 3000:80 grid-react-app

Verified that the application loaded correctly in the browser at http://localhost:3000.

5. Final Testing and Verification
Confirmed successful app compilation via terminal.

Opened the local website and verified the UI with the Grid Dynamics branding.

**Images:**
Application Running in Browser
<img width="1509" alt="Screenshot 2025-06-20 at 9 41 10 AM" src="https://github.com/user-attachments/assets/7a4cceb4-6735-40a8-a907-2be77ea12433" />


Terminal with Successful Compilation
<img width="599" alt="Screenshot 2025-06-20 at 9 41 23 AM" src="https://github.com/user-attachments/assets/0b3beb8e-2ecf-494a-8a2f-cd600416de81" />
