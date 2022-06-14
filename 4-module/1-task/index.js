function makeFriendsList(friends) {
    let list = document.createElement('ul')

    friends.forEach(friend => {
        let li = document.createElement('li');
        li.innerHTML = friend.firstName + ' ' + friend.lastName;
        list.append(li);
    });

    return list
}
