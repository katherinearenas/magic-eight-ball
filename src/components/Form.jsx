function Form({ handleSubmit, handleInputChange, question}){

   return (<form onSubmit={handleSubmit}>
    <input
      name='question'
      type="text"
      placeholder="Ask a question"
      value={question}
      onChange={handleInputChange}
    />
    <button type="submit">Shake!</button>
  </form>)
}

export default Form