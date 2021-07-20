"use strict";

function addreceiver(index) {
	let receiver = receivers[index];
	let receiverTemplate = document.getElementById("receiver-template");
	let clone = receiverTemplate.content.cloneNode(true);

	clone.querySelector(".receiver").style.backgroundColor = receiver.color;
	clone.querySelector(".receiver").dataset.receiver = index;
	clone.querySelector("h2").innerText = receiver.name;
	clone.querySelector(".power_input").value = receiver.power;
	clone.querySelector(".power_range").value = receiver.power;
	clone.querySelector(".duration_input").value = receiver.duration;
	clone.querySelector(".duration_input").step = receiver.durationIncrement;
	clone.querySelector(".duration_range").value = receiver.duration;
	clone.querySelector(".duration_range").step = receiver.durationIncrement;
	
	document.getElementById("receivers").appendChild(clone);   
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function command(receiver, action, power, duration) {
	let token = window.location.hash.substring(7);
	let url = "/pyshock/command?token=" + escape(token)
            + "&receiver=" + escape(receiver)
            + "&action=" + escape(action)
            + "&power=" + escape(power)
            + "&duration=" + escape(duration);
	return fetch(url);
}
 
async function trigger() {
	await command(config.receiverIndex, "BEEP", 0, config.beepDuration);
	await sleep(config.pauseDuration);
	await command(config.receiverIndex, "ZAP", config.zapLevel, config.zapDuration);
}

let lastNavigatorVibrate = 0;
async function inputHandler(e) {
	let input = e.target;
	let value = input.value;
	input.parentNode.querySelector("input[type=number]").value = value;
	input.parentNode.querySelector("input[type=range]").value = value;
	if (navigator.vibrate && Date.now() - lastNavigatorVibrate > 100) {
		navigator.vibrate([5]);
		lastNavigatorVibrate = Date.now();
	}
}

async function clickHandler(e) {
	if (e.target.tagName != "BUTTON") {
		return;
	}
	let button = e.target;
	let receiver = button.parentNode.parentNode;
	let action = button.className.toUpperCase();
	let power = receiver.querySelector(".power_input").value;
	let duration = receiver.querySelector(".duration_input").value;
	
	let res = await command(receiver.dataset.receiver, action, power, duration);
	if (res.status == 200 && navigator.vibrate) {
		navigator.vibrate([50]);
	}
}

async function init() {
	let response = await fetch('/pyshock/config.json');
	window.receivers = await response.json();
	for (let i = 0; i < receivers.length; i++) {
		addreceiver(i);
	}
	document.getElementById("receivers").addEventListener("click", clickHandler);
	document.getElementById("receivers").addEventListener("input", inputHandler);
}

init();
