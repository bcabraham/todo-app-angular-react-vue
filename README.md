# Todo Apps using Angular, React, and Vue

## Inspiration
I was inspired by a [CodingGarden](https://www.youtube.com/channel/UCLNgu_OupwoeESgtab33CCw) video I watched the other day: [video](https://www.youtube.com/watch?v=qQGPpUmDSPI&list=PLo_7gZLjEMa63RBD4O1Lg4aUwhexAQwex&index=43&t=0s).

After watching CJ create the same app using the top three frameworks (Angular, React, and Vue) as well as vanilla JavaScript, I wanted to do something similar to see which framework I liked. 

## App Idea
I chose to write a very simple Todo App using each framework. While I'm familiar with all three frameworks, I haven't worked with any of them on a large-scale application, so I wanted to focus on the fundamentals of each and get an idea of which was easier to understand and use.

## Design
For my app design, I chose to use the root App component to store the Todo data and ultimately handle adding and removing Todos. I used a separate form component to handle user input and TodoList and Todo components to display the data. The Todo component houses buttons to mark a Todo complete (showing to the user as strikethrough text using a local CSS class) and to delete the Todo from the list.

## Styling
I used Bootstrap for my main styling and included custom component styles as needed. Where possible, I used a corresponding npm Bootstrap package for each framework. Since my coding experience has predominantly been in server-side applications, I find styling with CSS both daunting and frustrating at times. But, working with Bootstrap on this project has given me some insight into the design elements that go into a web application, such as uniformity across pages (apps in this case) and whitespace. 

## Vue
I chose to work with Vue first. After creating the project with the Vue CLI tool, it tooks me just seconds to start creating components and functionality. I liked having all the code and styling for a component in one file. It was more straightforward to add something to the view and then add functionality right below it. Passing functional and data props to child components was very simple. After combing through the documents for a while on how to do this with my first component, it was very easy to replicate for the others. 

I struggled a bit with how to send the `deleteTodo` event from a doubly-nested component to the App component and ultimately decided to pass the `removeTodo` method down to the TodoList component and trigger an event in the Todo component that the list component listened for. This isn’t how I originally intended it to work and I came up with a better solution when working on the Angular app later on.

## React
Next, I created an app with React. I thought React and Vue were very similar in usage for this case. Component templating and logic were essentially the same. This app was also much faster to complete, since I knew what specific topics to search for instead of having to comb through the React documents. Using the new State hooks was also very straightforward for handling and updating data in the App component's State. 

Here, as with the Vue app, I had issues propagating the Delete event up from the Todo component to the App component’s state. In this case, I decided to pass the `removeTodo` function down the component chain instead of listening for an event.

## Angular
Finally, I used Angular to make an app. One of the biggest differences I noticed after creating the app with the Angular CLI tool was the large number of extra files that were created in the project. Even before starting any development, the project already seemed more complicated. In general, I found it more difficule to start creating and linking components and to get everything running with just basic templates. Having mostly programmed in Java and C#, I felt at home having to declare my data types and even created a Todo data class for better ease of use. I also found the custom angular Bootstrap libraries to be lacking (for my use case at least), so I just used basic Bootstrap styling with pure Angular components. 

As in the Vue and React projects, I ran into an issue when triggering the Delete event in the Todo component and propagating it up to the root App component. Honestly, I got a little frustrated with how hard it was to do this in Angular than in React and Vue. So, I stopped working on it for the night. I came back the next morning and had a realization: The TodoList component is a red herring. It wasn’t providing any functionality on its own, but rather just acting as a middleman for the App and Todo components. So, I got rid of it. This greatly simplified the communication between the two components since I could trigger an event at the Todo level, and have the parent App component directly listening for it.

## Final Thoughts
Overall, I enjoyed working with React and Vue the most. I felt it was easy to get an idea down on paper and start refining it. I used an iterative process to first display simple text, and then start adding bits of functionality. I felt React and Vue lent themselves to this type of work. While it was good to get better insight into an Angular project, I don’t think I’ll be using it for any personal projects going forward. That said, it is in use in my current job, so I know it will help there.

## Next Steps
While this was a great exercise in getting to know these three frameworks, I still recognize these projects are unfinished. Here are some items I’d like to accomplish when I come back to this project:

- I only implemented form validation in the Vue project. I’d like to add that to both the React and Angular projects.
- Remove TodoList components from the React and Vue projects and simplify their structure a bit.
- Add tests for each project.
- Create a webserver and publish these projects to a website.
- Unify the data store in each app into a service and persistent backend resource like MongoDB or Firestore.
