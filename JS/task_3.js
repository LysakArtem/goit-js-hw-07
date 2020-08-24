const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const gallery = document.querySelector('#gallery');

  const stringHtml= images.reduce(function(acc,{url,alt}){
     
    // const newElementLi = document.createElement('li');
    // newElementLi.setAttribute('src',url);
    // newElementLi.setAttribute('alt',alt);
    // console.log(newElementLi);
    
    return acc+=
        `<li>
            <img src=${url} alt=${alt}} class="gallery_task3__item">
        </li>`;
    },'')
  console.log(stringHtml);
  console.log(gallery);
  gallery.insertAdjacentHTML("afterBegin", stringHtml);