let sendButton = document.querySelector('button');

function send() {
    let name = document.querySelector('#nameValue').value;
    let age = document.querySelector('#ageValue').value;
    let sch = document.querySelector('#schValue').value;
    let phone = document.querySelector('#phoneValue').value;
    let mail = document.querySelector('#mailValue').value;
    let meat = "";
    let vege = "";
//     if (document.querySelector('#foodValue-meat').checked) meat = document.querySelector('#foodValue-meat').value;;
//     if (document.querySelector('#foodValue-vegetarian').checked) vege = document.querySelector('#foodValue-vegetarian').value;;
    let media = "";
    let friend = "";
    if (document.querySelector('#infosource-media').checked) media = document.querySelector('#infosource-media').value;
    if (document.querySelector('#infosource-friend').checked) friend = document.querySelector('#infosource-friend').value;
    
    let wait = "";
    let online = "";
    if (document.querySelector('#classValue-physical').checked) wait = document.querySelector('#classValue-physical').value;
    if (document.querySelector('#classValue-online').checked) online = document.querySelector('#classValue-online').value;
    
    let code = document.querySelector('#codeValue').value;
//     let online = ""
//     if (document.querySelector('#onlineValue').checked) online = document.querySelector('#onlineValue').value;

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyJYpVTxfx9ggfsnsRPg69WJj0xSSb3aGAAUG5L1dF8TU0yCriLwOM1MCojHAs2cLQrag/exec",
        data: {
            "name": name,
            "age": age,
            "school": sch,
            "phone": phone,
            "mail": mail,
            "foodMeat": meat,
            "foodVege": vege,
            "infoMedia": media,
            "infoFriend": friend,
            "codeSkill": code,
//             "onlineCourse": online
            "wait": wait,
            "online": online
        },
        // success: function(response) {
        //     if (response == "成功") {
        //         alert("感謝您的填寫");
        //     }
        // },
    });

    document.querySelector('#btn').innerHTML = '已收到您回覆的表單';
    // document.querySelector('#btn').innerText = 'Hide Result';
    // document.querySelector('#btn').textContent = 'Hide Result';
};

sendButton.addEventListener('click', send);
