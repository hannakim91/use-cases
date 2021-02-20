export const postSentence = async (data) => {
  const promise = await fetch('http://localhost:8001/api/v1/sentences',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await promise.json()
}