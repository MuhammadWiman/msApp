import { StyleSheet } from 'react-native'
body, html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
}

body {
    font-family: 'Segoe UI', Helvetica Nenu, Helvetica, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-image: linear-gradient(180deg, #dddbd1, #d2dbdc);
}

.top {
    height: 130px;
    width: 100%;
    background-color: #009688;
    position: fixed;
    z-index: -1;
}

.chatbox {
    height: calc(100% - 40px);
    width: 95%;
    margin-top: 20px;
    padding: 0;
}

.profile-pic {
    height: 40px;
    width: 40px;
}

.form-rounded {
    border-radius: 1rem;
}

.friend-pic {
    height: 50px;
    width: 50px;
    margin-left: -10px
}

.name {
    font-weight: 400;
    color: #000;
}

.under-name {
    font-size: 12px;
    line-height: 15px;
    max-height: 15px;
}

.icon {
    font-size: 20px;
    color: #9CA1A3;
    cursor: pointer;
}

.chat-pic {
    height: 30px;
    width: 30px;
}

.receive {
    background-color: lightgreen;
    border-radius: 1rem;
    padding: 10px 15px;
    display: inline-block;
}

.sent {
    background-color: whitesmoke;
    border-radius: 1rem;
    padding: 10px 15px;
    display: inline-block;
}

.time {
    font-size: 10px;
    color: #9CA1A3;
    margin-top: 3%;
    margin-left: 1%;
}

.card {
    height: 94vh;
}

#messages {
    overflow-y: scroll;
    overflow-x: hidden;
}

#lstChat {
    overflow-y: scroll;
    overflow-x: hidden;
}

.dropdown-toggle::before {
    display: none !important;
}

.dropdown-toggle::after {
    display: none !important;
}

#emoji {
    position: absolute;
    top: -30vh;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0,0,0,0.23) 0px 3px 6px;
}

    #emoji #myTabContent {
        height: 20vh;
    }

#myTabContent a {
    text-decoration: none;
}

#notification {
    background-color: red;
    border: 1px solid red;
    border-radius: 50%;
    position: absolute;
    margin-top: -10%;
    font-size: 12px;
    width: 30%;
    text-align: center;
    color: white;
    font-weight: bold;
    margin-left: -12%;
}
