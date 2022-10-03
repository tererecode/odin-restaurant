export default function loadContact() {
    const content = document.getElementById('content');
    const contactInfo = document.createElement('ul');
    const phoneNum = document.createElement('li');
    phoneNum.textContent = 'Number: +555 99 99 10101'
    const address = document.createElement('li');
    address.textContent = 'Address: 5th Avenue 123';
    content.innerHTML = ''
    contactInfo.append(phoneNum, address);
    content.appendChild(contactInfo);
}