document.getElementById("Download").addEventListener("click", function() {
    let resumeFilePath = 'docs/resume.pdf';

    let downloadLink = document.createElement('a');
    downloadLink.href = resumeFilePath;
  
    downloadLink.download = 'resume.pdf';
  
    document.body.append(downloadLink);
  
    downloadLink.click();

  });
  
  let live1 = document.getElementById("live-1");

  live1.addEventListener("click",function() {
    let link = document.createElement('a');
    link.href = "https://darling-lily-fed51f.netlify.app";
    
    link.target = "_blank";

    document.body.append(link);

    link.click();
  })

  let live2 = document.getElementById("live-2");

  live2.addEventListener("click",function() {
    let link2 = document.createElement('a');
    link2.href = "https://dhanushs3103.github.io/Naukri.com-Clone/";
     
    link2.target = "_blank";
  
    document.body.append(link2);
        
    link2.click();       
  })