# The document uploader application

💻 Languages: Next.js (React.js Framework, TailwindCSS)
Versioning: Github - public
Deployment: Vercel


## How to run it

You can run the application in various ways:

1. From a local machine
Go to [github.com/**vittoriocompagno/document-uploader-gcvh](https://github.com/vittoriocompagno/document-uploader) a**nd clone the repository.
****Then, open the terminal in the directory where you cloned the repository and type 

    
    ```jsx
    npm run dev
    ```
    
    Then  go to the [localhost](http://localhost) address showed by the terminal.
    
2. From a browser
Since this great application is production-ready, I deployed it on Vercel, a hosting website for Next.js apps. To visit it, simply go to [https://vercel.com/vittoriocompagno/document-uploader/J3XSxVhNFGnRogb53WedakjRruig](https://document-uploader-9vpwpb50p-vittoriocompagno.vercel.app)

## How to test it

This is a frontend-only application. To test it, simply click on the cloud button, and your browser will open a file panel. 
Then, choose the file, and watch it seamlessly appear on the ‘Your Files’ list. Beautiful

## How does it work?

In this section I’ll talk about the general working of the application. More details can be found in the code comments.

1. **UploadButton component**: This component represents a button with an underlying file input element. When a file is selected through the file input, the **file's name** is updated in the component's state and displayed on the button. It also accepts an **`onUpload`** prop which is a function to be called when a file is uploaded. This function will receive the uploaded file as an argument.
2. ‘**Home’ component (./page.tsx)**: This is the main component of the application. It maintains a state **`uploadedFiles`** which is an array of names of the uploaded files. It also defines a function **`handleUpload`** which updates the **`uploadedFiles`** state when a file is uploaded. This function is passed as a prop to the **`UploadButton`** component.
3. **File List Display**: Within the Home component, we also have a list display of uploaded files. For each file in the **`uploadedFiles`** state, it creates a list item displaying the file name. This list is updated every time a file is uploaded.
4. **Confirm button**: This component is a button that displays a message when a file is uploaded

The flow of the application is as follows:

- When the user clicks on the **`UploadButton`**, they are prompted to select a file.
- After a file is selected, the **`handleFileUpload`** function inside the **`UploadButton`** component is triggered. This function updates the state of the **`UploadButton`** component with the selected file's name and calls the **`onUpload`** function passed as a prop with the uploaded file.
- The **`onUpload`** function is the **`handleUpload`** function defined in the ‘**`Home`'** component. This function updates the **`uploadedFiles`** state with the new file's name.
- Each time the **`uploadedFiles`** state is updated, the component re-renders, and the list of uploaded files is updated to include the new file's name.

This structure allows the application to maintain a list of uploaded files and display it to the user, while also keeping the file uploading logic encapsulated within the **`UploadButton`** component.

## Room for improvement

Here are some ideas on how the app improve

Front-end

- Mobile-friendly Development
- A progress-bar
- Drag-and-drop
- Better behavior when the ‘confirm’ button is clicked
- A navbar with a title and logo
- More pleasing color-palette and font

Back-end

- Saving the files on a server (the connection between a github repo and a cloud service like Azure is very easy)
- Anti-virus check for the files
- Logging and monitoring
- Secure file sharing

 

This project was made by Vittorio Compagno for the SEAL Code Challenge.

This is part of my application at DR Heinekamp

© 2023 Vittorio Compagno. All rights reserved.
