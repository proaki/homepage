import React, { useState, useEffect, useCallback } from 'react';
import './assets/styles/style.css';
import {AnswersList, Chats, Loading} from './components/index';
import FormDialog from './components/Forms/FormDialog';
import {db} from './firebase/index';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false);

  
  const handleOpen = useCallback(() => {
    setOpen(true)
  },[setOpen]);
  
  const handleClose = useCallback(() => {
    setOpen(false)
  },[setOpen]);


  const addChats = useCallback((chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  },[setChats]);

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
      text: nextDataset.question,
      type: 'question'
    })
    
      setAnswers(nextDataset.answers)      
      setCurrentId(nextQuestionId)
  }    
  

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {      
      case (nextQuestionId === 'contact'):
        handleOpen();
        break;

      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;
      
      default:    
        addChats({
          text: selectedAnswer,
          type: 'answer'
        })

        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 1000);
        break;
    }    
  }


  useEffect(() => {
    (async() => {
      const initDataset = {};

      await db.collection('questions').get().then(snapshots => {
        snapshots.forEach(doc => {
          const id = doc.id
          const data = doc.data()
          initDataset[id] = data
        })
      })

      setDataset(initDataset)
      displayNextQuestion(currentId, initDataset[currentId])
    })()
  }, [])

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area")
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  })

  
  return (
    <section className="c-section">
      <div className="c-box">
      {(Object.keys(dataset).length === 0) ? (
                    <Loading />
                ) : (
                    <>
                        <Chats chats={chats} />
                        <AnswersList answers={answers} select={selectAnswer}/>
                    </>
                )}
        <FormDialog open={open} handleOpen={handleOpen} handleClose={handleClose}/>
      </div>      
    </section>
  )  
}

export default App;