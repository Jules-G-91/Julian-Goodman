//Selecting all required elements

const galleryContainer = document.querySelectorAll('.galleryContainer .galleryImage'),
PreviewLightBox = document.querySelector('.Preview-lightBox'),
PreviewImg = PreviewLightBox.querySelector('img'),
closeIcon = PreviewLightBox.querySelector('.iconClose'),
currentImg = PreviewLightBox.querySelector('.currentImg'),
totalImg = PreviewLightBox.querySelector('.totalImage'),
shadow = document.querySelector('.shadow');



window.onload = ()=> { //Once the window is loaded
    for (let i = 0; i < galleryContainer.length; i++) {
        totalImg.textContent = galleryContainer.length; //passing gallery images length to totalImg
        let newIndex = i; //Passing i value to newIndex variable
        let clickImgIndex;
        galleryContainer[i].onclick = ()=> {
            clickImgIndex = newIndex; //passing clicked img index to clickImgIndex variable
            function preview(){
                currentImg.textContent = newIndex + 1;  //passing newINdex value to currentImg + 1 as index == 0
                let selectedImgUrl = galleryContainer[newIndex].querySelector('img').src; //Getting the user clicked image url
                PreviewImg.src = selectedImgUrl; //Passing the user clicked img URL to previewImg source
            }

            //Here we will work on previous and next button functionality

            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            if (newIndex == 0) {
                prevBtn.style.display = 'none';
            }
            if(newIndex >= galleryContainer.length - 1) {
                nextBtn.style.display = 'none';
            }
            prevBtn.onclick = ()=> { 
                newIndex--; //decrements the newIndex value
                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = 'none';
                } else {
                    preview(); //calling again above function to update image 
                    nextBtn.style.display = 'block';
                }
            }
            nextBtn.onclick = ()=> { 
                newIndex++; //increments the newIndex value
                if(newIndex >= galleryContainer.length - 1){
                    preview();
                    nextBtn.style.display = 'none';
                } else {
                    preview(); //calling again above function to update image
                    prevBtn.style.display = 'block';
                }
            }


            preview() //Calling the above function
            PreviewLightBox.classList.add('show');
            shadow.style.display = 'block';
            document.querySelector('body').style.overflow = 'hidden';

            closeIcon.onclick = ()=> {
                newIndex = clickImgIndex; //assigning user first click img index to newIndex variable
                prevBtn.style.display = 'block';
                nextBtn.style.display = 'block';
                PreviewLightBox.classList.remove('show');
                shadow.style.display = 'none';
                document.querySelector('body').style.overflow = 'auto';
            }
        }
    }
}