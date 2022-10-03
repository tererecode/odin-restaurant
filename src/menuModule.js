export default function loadMenu() {
    const content = document.getElementById('content');
    const menuList = document.createElement('ul');
    const item1 = document.createElement('li');
    item1.textContent = 'Lasagna'
    const item2 = document.createElement('li');
    item2.textContent = 'Spaghetti'
    const item3 = document.createElement('li');
    item3.textContent = 'Filet Mignon'
    const item4 = document.createElement('li');
    item4.textContent = 'Onion Soup'
    content.innerHTML = ''
    menuList.append(item1, item2, item3, item4);
    content.appendChild(menuList);
}