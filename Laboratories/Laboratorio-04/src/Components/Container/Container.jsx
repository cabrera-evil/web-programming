import React, { useState, useEffect } from "react";
import "./Container.css";
import FormContainer from "./FormContainer/FormContainer";
import CardContainer from "./CardContainer/CardContainer";

const Container = () => {
    // Code
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const addNote = (note) => {
        // Code
        if (note.length < 1) {
            // Code
            if (showAlert) {
                return;
            }
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 4000);
            return;
        }
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const noteObj = {
            id: Date.now(),
            note,
        };
        notes.push(noteObj);
        localStorage.setItem("notes", JSON.stringify(notes));
        setNotes(notes);
    };
    const deleteNote = (id) => {
        // Code
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const newNotes = notes.filter((note) => note.id !== id);
        localStorage.setItem("notes", JSON.stringify(newNotes));
        setNotes((prevNotes) => {
            return prevNotes.filter((note) => note.id !== id);
        });
    };
    const editNote = (id, note) => {
        // Code
        const notes = JSON.parse(localStorage.getItem("notes") || []);
        const noteIndex = notes.findIndex((note) => note.id === id);
        notes.splice(noteIndex, 1, { id, note });
        localStorage.setItem("notes", JSON.stringify(notes));
        setNotes(notes);
    };
    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(notes);
    }, [note]);

    return (
        <div className="container">
            <FormContainer onAddNote={addNote} />
            <CardContainer onNotes={notes} onDelete={deleteNote} onEdit={editNote} />
        </div>
    );
};

export default Container;