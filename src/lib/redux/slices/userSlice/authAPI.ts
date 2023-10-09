export const signup = async (
    user = {} 
  ): Promise<{ data: number }> => {
    const response = await fetch('http://localhost:3000/api/identity-count', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user }),
    })
    const result = await response.json()
  
    return result
  }
  