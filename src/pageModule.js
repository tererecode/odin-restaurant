import restaurantImg from './assets/images/fancy-restaurant.jpg'
export default function pageLoad() {
    const content = document.getElementById('content')
    const heading = document.createElement('h1');
    const imgHero = document.createElement('img');
    const copyPara = document.createElement('p');
    heading.textContent = 'This is some fancy restaurant';
    imgHero.src = restaurantImg;
    copyPara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam necessitatibus provident. Vel neque culpa animi, iste nisi commodi libero enim minus totam non consequatur deleniti? Nesciunt dolore totam ab!'
    content.appendChild(heading);
    content.appendChild(imgHero);
    content.appendChild(copyPara);

}

