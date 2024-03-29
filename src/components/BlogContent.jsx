import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const BlogContent = ({blogs}) => {

    const [blog, setBlog] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await blogs; // Assuming blogs is a promise
                const blogData = response.data;
                const selectedBlog = blogData.find((blog) => blog.id == id);
                setBlog(selectedBlog || {});
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setBlog({});
            }
        };

        fetchBlog();
    }, [blogs, id]);



    // const blogs = [
    //     {
    //         'id': 1,
    //         'title': 'Blog 1',
    //         'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis culpa dicta ipsa, iure odit omnis unde voluptatum.',
    //         'coverImg': 'https://i.pinimg.com/originals/9f/f7/8b/9ff78b1a00b89070db87a64ba03c9ba8.png',
    //         'alt': "Doesn't work",
    //         'content': 'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋',
    //         'authorName': 'John Doe',
    //         'authorImg': 'https://www.simplilearn.com/ice9/free_resources_article_thumb/How-to-become-a-complete-Web-Development-Professional.jpg',
    //         'authorDesc': 'Web Developer'
    //     },
    //     {
    //         'id': 2,
    //         'title': 'Blog 2',
    //         'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis culpa dicta ipsa, iure odit omnis unde voluptatum.',
    //         'coverImg': 'https://i.pinimg.com/originals/9f/f7/8b/9ff78b1a00b89070db87a64ba03c9ba8.png',
    //         'alt': "Doesn't work",
    //         'content': 'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋',
    //         'authorName': 'John Doe',
    //         'authorImg': 'https://www.simplilearn.com/ice9/free_resources_article_thumb/How-to-become-a-complete-Web-Development-Professional.jpg',
    //         'authorDesc': 'Web Developer'
    //     },
    //     {
    //         'id': 3,
    //         'title': 'Blog 3',
    //         'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis culpa dicta ipsa, iure odit omnis unde voluptatum.',
    //         'coverImg': 'https://i.pinimg.com/originals/9f/f7/8b/9ff78b1a00b89070db87a64ba03c9ba8.png',
    //         'alt': "Doesn't work",
    //         'content': 'Intro to Web3 Day 1: Intro to Web3 What is Web3To put it simply, Web3 is the latest version of what we know as the internet. In this version, people have full ownership of their content, data and assets. There are also no middlemen involved, which is presently the case with large corporations and governments controlling and regulating whatever goes on the internet. In some areas, you may read some terms like decentralized and democratization of the internet being used for Web3, which can be sort of confusing. But for now, think of decentralization as not being controlled and monitored by others, rather, by yourself. Web1 = read  Web1 happened when the internet was officially introduced in the 1980s onwards. Few individuals or groups created content - like news media outlets, search engines, directories. During this era, the majority of traffic used the internet in a read-only capacity. They searched for an article, read it and closed it, that’s mostly how far it went. Very little participation. An example of Web 1 = Yahoo.comWeb2 - read, write Web2 came about in the 2000s and is still pretty much there. Now users like me and you can share our thoughts on that article we read, and that too, amongst our friends on social networks. It made space for everyone to become a content creator and consumer simultaneously - although those of us who gathered followerships only got paid. Now media is produced on social networks, who then are able to sell personal data to advertisers in order to generate massive amounts of revenue. But since they collect a lot of our personal data, privacy has started to become a concern.An example of Web2: YouTubeWeb3 - read, write, ownSince privacy and personal data became a concern, Web3 solves that. With Web3, participants will have full ownership over their content, data, and assets. It represents a democratized Internet – an Internet that is governed by users for the benefit of users. Right now everything is controlled by the people at the top - in Web3, they may not exist. Even if they do, you won’t need them because you’ll own what you create. An example of Web3: Mirror.xyz Expanding more into this, Web3 will give users full ownership of their assets, data, practically anything via blockchains. Now, what are blockchains? Blockchain is a public list of records. It stores information in batches called blocks. These blocks are linked together to form a continuous line. A chain of blocks. A blockchain. Each block is like a page of a record book. What isn’t blockchainBlockchain is NOT a cryptocurrency.Blockchain is NOT a programming language.Blockchain is NOT a cryptographic codification.Blockchain is NOT an AI or Machine Learning technology.Blockchain is NOT a Python library or framework.Nope, nada, naa. Let’s move on. But before I mention the word I’m about to,Here’s the definition for immutable: unchanging over time or unable to be changedSynonyms include: fixed - set - unchangeable - rigid - unshakeable - irremovable So, again, what does blockchain do for me?It works as an immutable (fixed, unchangeable, unshakeable) record of transactions that do not require to rely on any external authority like banks, governments, large corporations to validate the authenticity and integrity of the data. As I mentioned earlier, Blockchain is a public database of information, that means there is no central body or single entity control (say Mark Zuckerberg) managing and controlling the database and evil laughing. In fact, millions of users on the Internet help manage and maintain the records. That’s decentralized and democratized for you, hah, take that Facebook!So in a nutshell, these changes will create an open, trustless, and permissionless network. Let me explain if this sounds wild to you.Open: It will be an open-source software built by an open and accessible community of developers and executed in the full view of the world.Trustless: It will allow participants to interact publicly or privately without any third party butting in.Permissionless: Neither users nor suppliers need any authorization from a governing body for participating.If you have questions, head over to our Discord and shoot! See ya tomorrow with another bite-sized web3 lesson! 👋',
    //         'authorName': 'John Doe',
    //         'authorImg': 'https://www.simplilearn.com/ice9/free_resources_article_thumb/How-to-become-a-complete-Web-Development-Professional.jpg',
    //         'authorDesc': 'Web Developer'
    //     },
    // ]


    // let blog = blogs.filter(blog => blog.id == id);
    // blog = blog[0];
    // console.log(blog);

    return (

        <div className='w-full pb-10 bg-[#f9f9f9] flex-grow'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 xs:grid-cols-1 sm:gap-8 ss: gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>


                    {Object.keys(blog).length > 0 && (
                        <>
                            <div className='col-span-2 gap-8'>
                                <img className='h-56 w-full object-cover'
                                     src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
                                     alt=""/>

                                <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes.blogTitle}</h1>
                                <div className='pt-5'><p>{blog.attributes.blogContent}</p></div>
                            </div>


                            <div
                                className='w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]'>
                                <div>
                                <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover'
                                         src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`}
                                         alt=""/>
                                    <h2 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.attributes.authorName}</h2>
                                    <p className='text-center text-gray-900 font-medium'>{blog.attributes.authorDesc}</p>
                                </div>

                            </div>
                        </>
                    )}
                </div>

            </div>
        </div>

        // <div className='w-full pb-10 bg-[#f9f9f9] flex-grow'>
        //     <div className='max-w-[1240px] mx-auto'>
        //         <div className='grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 xs:grid-cols-1 sm:gap-8 ss: gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
        //
        //             <div className='col-span-2 gap-8'>
        //                 <img className='h-56 w-full object-cover' src={blog.coverImg} alt=""/>
        //                 <h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
        //                 <div className='pt-5'><p>{blog.content}</p></div>
        //             </div>
        //
        //             <div className='w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]'>
        //                 <div>
        //                     <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={blog.authorImg} alt=""/>
        //                     <h2 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.authorName}</h2>
        //                     <p className='text-center text-gray-900 font-medium'>{blog.authorDesc}</p>
        //                 </div>
        //
        //             </div>
        //         </div>
        //
        //     </div>
        // </div>
    )
}

export default BlogContent;