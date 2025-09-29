     const projectsDiv = document.getElementById('projects');
     for(let i = 0; i < PROJECTS.length; i++) {
        const currentProject = PROJECTS[i];
        const projectDiv = document.createElement('div');
        const divStyle = document.createAttribute("style");
        divStyle.value = "display: inline-block; margin: 10px; border: 1px solid #ccc; padding: 10px; width: 500px; height: 800px; vertical-align: top;hover: transform: scale(1.05); transition: transform 0.3s;shadow: 0 4px 8px rgba(0, 0, 0, 0.1);";
        projectDiv.setAttributeNode(divStyle);
        const title = document.createElement('h3');
        const titleNode = document.createTextNode(currentProject.title);
        title.appendChild(titleNode);

        const img = document.createElement('img');
        const src = document.createAttribute("src");
        src.value = "./images/" + currentProject.img;
        img.setAttributeNode(src);
        const imgStyle = document.createAttribute("style");
        imgStyle.value = "width:500px; height: 300px;";
        img.setAttributeNode(imgStyle);
        
        const video = document.createElement('video');
        const videoSrc = document.createAttribute("src");
        videoSrc.value = "./video/" + currentProject.video;
        video.setAttributeNode(videoSrc);
         video.setAttribute("controls", "controls");
         const videoStyle = document.createAttribute("style");
         videoStyle.value = "width:500px; height: 300px;";
         video.setAttributeNode(videoStyle);
         projectDiv.appendChild(video);

        const desc = document.createElement('p');
        desc.textContent = currentProject.desc;
        const link = document.createElement('a');
        const linkStyle = document.createAttribute("style");
         linkStyle.value = "display: inline-block; margin-top: 10px; padding: 10px 15px; background-color: #472209ff; color: white; text-decoration: none; border-radius: 5px;";
        link.setAttributeNode(linkStyle);

        link.href = currentProject.link;
        link.target = "_blank";
        link.textContent = "View Project";
        projectDiv.appendChild(title);
        projectDiv.appendChild(img);
        projectDiv.appendChild(desc);
        projectDiv.appendChild(link);
        projectsDiv.appendChild(projectDiv);
     }
            //   PROJECTS.forEach(project => {
            //       const projectDiv = document.createElement('div');
            //       projectDiv.innerHTML = `
            //           <h3>${project.title}</h3>
            //           <img style="width:200px; height: auto;" src="${project.img}" alt="">
            //           <p>${project.desc}</p>
            //           <a href="${project.link}" target="_blank">View Project</a>
            //       `;
            //       projectsContainer.appendChild(projectDiv);
            //   });