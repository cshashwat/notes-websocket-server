import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  text: String,
  x: Number,
  y: Number,
  height: Number,
  width: Number,
  zIndex: Number,
});

const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;