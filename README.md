# OAuth2 gitlab 

The ability to delegate access between systems is central in modern web applications. One popular standard för access delegation is OAuth (Open Authorization). The OAuth flow can seem complicated at first glance, but it is essential to understand the different stakeholder's (client/consumer/service provider) involvement and communication.

## Objective

The objective is to implement a three-legged OAuth2 access delegation between a server-side rendered web application (the consumer) and GitLab (the service provider).

The user should be able to log in on the consumer application using her gitlab.lnu.se account and show some basic profile information, including at least the 101 most recent GitLab activities.
