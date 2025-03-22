function getThumbnail() {
    let url = document.getElementById('videoUrl').value;
    let videoId = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/) ||
                  url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    
    if (videoId && videoId[1]) {
        let id = videoId[1];
        let thumbnailsDiv = document.getElementById('thumbnails');
        thumbnailsDiv.innerHTML = '';
        
        let resolutions = [
            { res: 'maxresdefault', label: 'Best Quality' },
            { res: 'sddefault', label: 'Standard Quality' },
            { res: 'hqdefault', label: 'High Quality' },
            { res: 'mqdefault', label: 'Medium Quality' },
            { res: 'default', label: 'Low Quality' }
        ];
        
        resolutions.forEach(item => {
            let imgSrc = `https://img.youtube.com/vi/${id}/${item.res}.jpg`;
            thumbnailsDiv.innerHTML += `<p>${item.label}:</p>
                <img src="${imgSrc}" alt="${item.label} thumbnail">
                <button class="download-btn" onclick="downloadImage('${imgSrc}', '${item.label}.jpg')">Download</button><br>`;
        });
    } else {
        alert("Invalid YouTube URL");
    }
}

function downloadImage(url, filename) {
    let link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
