import React from 'react';

const Blog = () => {
    return (
        <div className='m-4 blog'>
            <div className='p-4'>
                <h4>Difference between authorization and authentication</h4>
                <p>
                    Authentication is when we check if a user is authentic or not. That means signing up with valid email password and other info or logging in as a valid user.  <br />
                    Authorization is done after authentication. This process validates the user. This defines whether the use can access the resources and protected pages. Both is for users and the webs security and safety.
                </p>
            </div>
            <div className='p-4'>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>Firebase is a Google's platform for creating quality web and mobile applications. Firebase provides tools for tracking analytics, user authentication, fixing app crashes, cloud manage and others.
                </p>
                <h6>
                    Other options to implement authentication are
                </h6>
                <ul>
                    <li>Parse</li>
                    <li>Back4App</li>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                    <li>NativeScript</li>
                </ul>
            </div>
            <div className='p-4'>
                <h4>What other services does firebase provide other than authentication?</h4>

                <p>Firebase provides many other services other then authentication. Such as..</p>

                <ul>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>GoogleAnalytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Cloud Storage</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;