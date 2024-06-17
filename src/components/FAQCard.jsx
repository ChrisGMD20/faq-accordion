import FAQstyle from './FAQCard.module.css'
import React from 'react'
import Question from './Question'

export default function FAQCard() {

    return(
        
        <div id={FAQstyle.card}>
            <header id={FAQstyle.header}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" viewBox="0 0 40 41"><path fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"/></svg>
                <h2>FAQs</h2>
            </header>

            <div id={FAQCard.content}>
                <Question question="What is Frontend Mentor and how will it help me?"
                    answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and Javascript, it's suitable for all levels and ideal for portfolio building"
                />

                <Question question="Is Frontend Mentor free?"
                answer="Frontend Mentor is free but to access some goodies, you need to become a pro member"
                ></Question>

                <Question question="Can i use Frontend Mentor projects in my portfolio?"
                answer="Without a doubt! Frontend Mentor projects aim at feeding developers with real world challenges so as to provide them with interesting projects to present in their portfolio"
                ></Question>

                <Question question="How can i get help if i'm stuck on a challenge?"
                answer="Upon submission of a solution, even incomplete, you can have access to others' solution in order to see the flaws in yours"
                ></Question>
            </div>


            
        </div>

    )
}