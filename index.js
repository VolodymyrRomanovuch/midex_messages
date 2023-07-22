const numberOfDay = Math.ceil(Math.random() * 31);
const dayMessage = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const content = ['Go for a walk', 'Buy bread', 'Keep feet', 'Learn HTML', 'Learn CSS', 'Learn JS', 
'Relax'];

const getDayMessage = () => {
    let getDay = Math.floor(Math.random() * dayMessage.length);
    return dayMessage[getDay];
}

const getContent = () => {
    let randomMessage = Math.floor(Math.random() * content.length);
    return content[randomMessage];
}

const mixedMessages = () => {
    let week = getDayMessage();
    let todo = getContent();
    console.log(`In ${numberOfDay} ${week} you should ${todo}!`);
}

mixedMessages();