import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto">
        <div className="border-2 border-black shadow-lg m-3 p-6 bg-slate-100 rounded-lg">
          <h1 className="text-2xl font-bold pb-1">
            Difference between SQL and NoSQL
          </h1>
          <p className="text-sm text-justify">
            SQL databases defines and manipulates data based structured query
            language (SQL). Seeing from a side this language is extremely
            powerful. SQL is one of the most versatile and widely-used options
            available which makes it a safe choice especially for great complex
            queries. But from other side it can be restrictive. SQL requires you
            to use predefined schemas to determine the structure of your data
            before you work with it. Also all of your data must follow the same
            structure. This can require significant up-front preparation which
            means that a change in the structure would be both difficult and
            disruptive to your whole system. A NoSQL database has dynamic schema
            for unstructured data. Data is stored in many ways which means it
            can be document-oriented, column-oriented, graph-based or organized
            as a KeyValue store. This flexibility means that documents can be
            created without having defined structure first. Also each document
            can have its own unique structure. The syntax varies from database
            to database, and you can add fields as you go.
          </p>
        </div>
        <div className="border-2 border-black shadow-lg m-3 p-4 bg-slate-100 rounded-lg">
          <h1 className="text-2xl font-bold pb-1">
            What is JWT, and how does it work?
          </h1>
          <p className="text-sm">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP). So the integrity and
            authenticity of the token can be verified by other parties involved.
            The purpose of using JWT is not to hide data but to ensure the
            authenticity of the data. JWT is signed and encoded, not encrypted.
            JWT is a token based stateless authentication mechanism. Since it is
            a client-side based stateless session, server doesn't have to
            completely rely on a datastore(database) to save session
            information.
          </p>
        </div>
        <div className="border-2 border-black shadow-lg m-3 p-4 bg-slate-100 rounded-lg">
          <h1 className="text-2xl font-bold pb-1">
            What is the difference between javascript and NodeJS?
          </h1>
          <p className="text-sm">
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance. NodeJS
            is a cross-platform and opensource Javascript runtime environment
            that allows the javascript to be run on the server-side. Nodejs
            allows Javascript code to run outside the browser. Nodejs comes with
            a lot of modules and mostly used in web development.
          </p>
        </div>
        <div className="border-2 border-black shadow-lg m-3 p-4 bg-slate-100 rounded-lg">
          <h1 className="text-2xl font-bold pb-1">
            How does NodeJS handle multiple requests at the same time?
          </h1>
          <p className="text-sm">
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
