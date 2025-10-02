   //   const projectsDiv = document.getElementById('projects');
   //   for(let i = 0; i < PROJECTS.length; i++) {
   //      const currentProject = PROJECTS[i];
   //      const projectDiv = document.createElement('div');
   //      const divStyle = document.createAttribute("style");
   //      divStyle.value = "display: inline-block; margin: 10px; border: 1px solid #ccc; padding: 10px; width: 500px; height: 800px; vertical-align: top;hover: transform: scale(1.05); transition: transform 0.3s;shadow: 0 4px 8px rgba(0, 0, 0, 0.1);@media (max-width: 600px) { width: 100%; };@media (min-width: 601px) and (max-width: 1024px) { width: 48%; };@media (min-width: 1025px) { width: 30%; }";
   //      projectDiv.setAttributeNode(divStyle);
   //      const title = document.createElement('h3');
   //      const titleNode = document.createTextNode(currentProject.title);
   //      title.appendChild(titleNode);

   //      const img = document.createElement('img');
   //      const src = document.createAttribute("src");
   //      src.value = "./images/" + currentProject.img;
   //      img.setAttributeNode(src);
   //      const imgStyle = document.createAttribute("style");
   //      imgStyle.value = "width:500px; height: 300px;@media (max-width: 600px) { width: 100%; height: auto; };@media (min-width: 601px) and (max-width: 1024px) { width: 100%; height: auto; };@media (min-width: 1025px) { width: 100%; height: auto; }";
   //      img.setAttributeNode(imgStyle);
        
   //      const video = document.createElement('video');
   //      const videoSrc = document.createAttribute("src");
   //      videoSrc.value = "./video/" + currentProject.video;
   //      video.setAttributeNode(videoSrc);
   //       video.setAttribute("controls", "controls");
   //       const videoStyle = document.createAttribute("style");
   //       videoStyle.value = "width:500px; height: 300px;@media (max-width: 600px) { width: 100%; height: auto; };@media (min-width: 601px) and (max-width: 1024px) { width: 100%; height: auto; };@media (min-width: 1025px) { width: 100%; height: auto; }";
   //       video.setAttributeNode(videoStyle);
   //       projectDiv.appendChild(video);

   //      const desc = document.createElement('p');
   //      desc.textContent = currentProject.desc;
   //      const link = document.createElement('a');
   //      const linkStyle = document.createAttribute("style");
   //       linkStyle.value = "display: inline-block; margin-top: 10px; padding: 10px 15px; background-color: #472209ff; color: white; text-decoration: none; border-radius: 5px;@media (max-width: 600px) { font-size: 14px; };@media (min-width: 601px) and (max-width: 1024px) { font-size: 16px; };@media (min-width: 1025px) { font-size: 16px; }";
   //      link.setAttributeNode(linkStyle);

   //      link.href = currentProject.link;
   //      link.target = "_blank";
   //      link.textContent = "View Project";
   //      projectDiv.appendChild(title);
   //      projectDiv.appendChild(img);
   //      projectDiv.appendChild(desc);
   //      projectDiv.appendChild(link);
   //      projectsDiv.appendChild(projectDiv);
   //   }
   //          //   PROJECTS.forEach(project => {
   //          //       const projectDiv = document.createElement('div');
   //          //       projectDiv.innerHTML = `
   //          //       <div style="display: inline-block; margin: 10px; border: 1px solid #ccc; padding: 10px; width: 220px; height: auto; vertical-align: top; hover: transform: scale(1.05); transition: transform 0.3s; shadow: 0 4px 8px rgba(0, 0, 0, 0.1);@media (max-width: 600px) { width: 100%; };@media (min-width: 601px) and (max-width: 1024px) { width: 48%; };@media (min-width: 1025px) { width: 30%; }">
   //          //           <h3>${project.title}</h3>
   //          //             <video style="width:200px; height: auto;" controls>
   //          //               <source src="${project.video}" type="video/mp4">
   //          //               Your browser does not support the video tag.
   //          //           </video>
   //          //           <img style="width:200px; height: auto;" src="${project.img}" alt="">
   //          //           <p>${project.desc}</p>
   //          //           <a href="${project.link}" target="_blank">View Project</a>
   //          //       </div>
   //          //       `;
   //          //       projectsContainer.appendChild(projectDiv);

   //          //   });


   const projectsDiv = document.getElementById('projects');

for (let i = 0; i < PROJECTS.length; i++) {
  const currentProject = PROJECTS[i];
  
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project-card');

  const title = document.createElement('h3');
  title.textContent = currentProject.title;

  const img = document.createElement('img');
  img.src = "./images/" + currentProject.img;

  const video = document.createElement('video');
  video.src = "./video/" + currentProject.video;
  video.controls = true;

  const desc = document.createElement('p');
  desc.textContent = currentProject.desc;

  const link = document.createElement('a');
  link.href = currentProject.link;
  link.target = "_blank";
  link.textContent = "View Project";
  link.classList.add('project-link');

  // Append
  projectDiv.appendChild(title);
  projectDiv.appendChild(img);
  projectDiv.appendChild(video);
  projectDiv.appendChild(desc);
  projectDiv.appendChild(link);
  projectsDiv.appendChild(projectDiv);
}
