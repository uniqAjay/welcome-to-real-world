
function customRender(realWorld, container) {
    const stickToThePage = document.createElement(realWorld.type)
    stickToThePage.innerHTML = realWorld.childern
    stickToThePage.setAttribute('href', realWorld.props.href)
    stickToThePage.setAttribute('target', realWorld.props.target)

    container.appendChild(stickToThePage)

    
}


const realWorld = {
    type: 'a',
    props: {

        href: 'https://google.com',
        target: '_blank'
    },

    childern: 'Welcome To The google'
}

const maincontainer = document.getElementById('root')
customRender(realWorld, maincontainer)