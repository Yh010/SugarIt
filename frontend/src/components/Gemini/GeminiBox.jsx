import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import { useState } from "react";
import runChat from "../../config/gemini";

export default function GeminiBox() {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
    const handleIsFavorite = () => setIsFavorite((cur) => !cur);
    

    const [input, setInput] = useState("");
    const [recentPrompt, setrecentPrompt] = useState("");
   /*  const [previousPrompt, setpreviousPrompt] = useState([]);  */
    const [showResult, setshowResult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultData, setresultData] = useState("");
  
    const delayPara = (index,nextWord) => {
        setTimeout(function () {
            setresultData(prev => prev + nextWord);
        },75*index)
    }

    const onSubmit = async (input) => {
        setresultData("");
        setloading(true);
        setshowResult(true);
        setrecentPrompt(input);
        const response = await runChat(input);
        let responseArr = response.split("**");
        let newResponse;

        for (let i = 0; i < responseArr.length; i++){
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArr[i];
            } else {
                newResponse += "<b>" + responseArr[i] + "</b>";
            }
        }
        let finalResp = newResponse.split("*").join("</br>")
        let finalRespArr = finalResp.split(" ");
        for (let i = 0; i < finalRespArr.length; i++){
            const nextWord = finalRespArr[i];
            delayPara(i,nextWord+"  ")
        }
        setloading(false);
        setInput("");
    }
    

  return (
    <div className="flex justify-end">
      <Card
        className="h-50 w-40 cursor-pointer overflow-hidden transition-opacity hover:opacity-70"
        onClick={handleOpen}
      >
        <img
          alt="nature"
          className="h-full w-full object-cover object-center"
          src="data:image/jpeg;base64,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"
        />
      </Card>
      <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              size="sm"
              variant="circular"
              alt="Sugar It"
              src="https://content.jdmagicbox.com/comp/rourkela/w3/9999px661.x661.211116002408.l9w3/catalogue/sugar-it-cafe-and-bake-shop-koel-nagar-rourkela-fast-food-vljw02cbxg.jpg"
            />
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                Hey! I am SugarIt AI, your personal assistant,always at your service at the click of a button
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              variant="text"
              size="sm"
              color={isFavorite ? "red" : "blue-gray"}
              onClick={handleIsFavorite}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </IconButton>
            <Button color="gray" size="sm">
              Ask me anything
            </Button>
          </div>
        </DialogHeader>
              <DialogBody>
                  <div>
                      {!showResult ?
                          <>
                              <div>
                                  tell me what you want to know
                              </div>
                          </>
                          :
                          <div className="result">
                              <div className="result-title">
                                  <p>
                                      {recentPrompt}
                                  </p>
                              </div>
                              <div className="result-data">
                                  {loading
                                      ?
                                      <div className="loader">
                                          <hr />
                                          <hr />
                                          <hr />
                                      </div> :
                                      <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                                      
                                  }
                              </div>
                          </div>
                          
                        }
                    <div className="search-box">
                      <input onChange={(e) => {
                          setInput(e.target.value)
                      }}
                          value={input}
                          type="text" placeholder="Ask anything" />
                        <div>
                            
                            <svg onClick={() => {
                                onSubmit(input)
                            }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </div>
                    </div>
                  </div>
               
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
              <Typography variant="small" color="gray" className="font-normal">
               Powered by Google's Gemini
              </Typography>
            </div>
          </div>
        </DialogFooter>
      </Dialog>
    </div>
  )
}

