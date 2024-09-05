// let moon = document.getElementById('moon');
// let mars = document.getElementById('mars');
let dest0 = document.getElementById('destination-0')
let dest1 = document.getElementById('destination-1')
// const click = () => {
//   console.log('Im clicked');
// }


// const _changeArticle0 = () => {
//     if(dest0.style.visibility === "hidden") {
//         dest0.style.visibility="visible";
//     }else {
//         dest0.style.visibility="hidden";
//     }
    
// }
// const _changeArticle1 = () => {
//     if(dest1.style.visibility === "hidden") {
//        dest1.style.visibility="visible";
//     }else {
//         dest1.style.visibility="hidden";
//     }
// }

const _showPage = (pageId) =>{
                // Hide all pages
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                // Show the selected page
                document.getElementById(pageId).classList.add('active');

                //Hide all imgs

                document.querySelectorAll('.imgcont').forEach(page => {
                    console.log(Image)

                    style.display = 'none';
                });
                //Show all imgs
                document.getElementById(pageId + 'Image').style.display ='block';
}


