const elmnt = document.getElementById('type')

const text = ' World'

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function type(t){
    for(let l of t){
        await waitForMs(500)
        elmnt.append(l)
    }
}

type(text)