import { useEffect, useState } from "react"


const mockData = [
    {
      id: 1,
      name: "Strawberries",
      description: "Fresh and organic strawberries.",
      price: 10,
      deliveryTime: "In 60 mins",
      imageUrl: "https://i.postimg.cc/4xdYDpvj/pexels-karolina-grabowska-4038803.jpg",
      rating:4.0
    },
    {
      id: 2,
      name: "Blueberries",
      description: "Delicious blueberries with nutrients.",
      price: 20,
      deliveryTime: "In 45 mins",
      imageUrl: "https://i.postimg.cc/cJ2J3jnc/pexels-angele-j-35172-139751.jpg",
      rating:5.0
    }
  ]; 

const useFetchProducts = () => {
    const [data, setData]=useState([])
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState('');

    const fetchedData =async ()=>{
        setLoading(true);
        try{
            const response =await new Promise ((resolve,reject)=>{
                setTimeout(()=>{
                    if(mockData.length >0){
                        resolve(mockData);
                    }else{
                        reject("no data available")
                    }
                },2000);
            });
            setData(response)
        }
        catch(e){
            console.log(e);
            setError(e)
        }finally{
            setLoading(false)
        }
    };

    useEffect(()=>{
        fetchedData();
    },[]);
  return {data,loading,error}
}

export default useFetchProducts;