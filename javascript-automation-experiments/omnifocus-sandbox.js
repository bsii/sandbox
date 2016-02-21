#!/usr/bin/env osascript -l JavaScript


function run(argv) {

	var of = Application('OmniFocus');
	   

	inbox = of.defaultDocument.inboxTasks
	task = of.InboxTask({name: "testing"})
	inbox.push(task)
	 
	// Delete every inbox task
	//
	// Here, we call inboxTasks() with parens so that it returns an array
	inbox = of.defaultDocument.inboxTasks()

	// Since `delete` is an AppleScript method, not a standard JavaScript method
	// we need to call `of.delete`.
	// // // inbox.forEach(of.delete)

    console.log("test");


}
