const addbtn = document.querySelector('.plus')
const meetlist =  document.querySelector('.meets')
let number = 1
const createMeet = () => {
    const element = document.createElement('div')
    element.className = "meeting-room-block"
    element.id = `meeting-room-block-${number}`
    const heading = document.createElement('h1')
    heading.innerHTML = `Meeting Room - ${number}`
    const desc = document.createElement('p')
    desc.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quaerat.'
    element.appendChild(heading)
    element.appendChild(desc)
    const booking = document.createElement('div')
    booking.className = 'booking'
    const form  = document.createElement('form')
    const label = document.createElement('label')
    label.innerHTML = 'Time:(in mins)'
    const input = document.createElement('input')
    input.type = "text"
    form.appendChild(label)
    form.appendChild(input)
    const btn = document.createElement('button')
    btn.className = 'btn'
    btn.innerHTML = 'Book'
    booking.appendChild(form)
    booking.appendChild(btn)
    element.appendChild(booking)
    meetlist.appendChild(element)
    number++
    console.log(element)
}
addbtn.addEventListener('click',(e)=>{
    console.log(e)
    createMeet()
});
const setMeetTime = (parent,time) => {
    const node = document.createElement('p')
    time = time * 60
    let minutes,seconds;
    parent.style.backgroundColor = 'rgb(255, 154, 133)'
    const input = parent.querySelector('input')
    const btn = parent.querySelector('.btn')
    input.disabled = true
    btn.disabled = true
    input.value = ''
    const interval = setInterval(()=>{
        minutes = Math.floor(time/60)
        seconds = time % 60
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        node.innerHTML = `${minutes}:${seconds}`
        parent.appendChild(node)
        if(--time < 0){
            clearInterval(interval)
            node.remove()
            parent.style.backgroundColor = 'white'
            input.disabled = false
            btn.disabled = false
        }
    },1000)
}
//event delegation
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn')){
        const parent = e.target.closest('.meeting-room-block')
        const book = e.target.closest('.booking')
        const input = book.querySelector('input')
        if(isNaN(input.value) || input.value <= 0)
        {
            alert("Enter a valid time")
            input.value = ''
        }
        else{
        setMeetTime(parent,input.value)
        }
    }
})

