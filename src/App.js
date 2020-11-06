import { useReducer } from "react";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Item } from "./components/Item";
import { Column } from "./components/Column";

const reducer = (state, e) => {
  if (!e.target.value && state[e.target.name]) {
    let current = { ...state };
    delete current[e.target.name];
    return current;
  } else if (!state[e.target.name] && e.target.value)
    return {
      ...state,
      [e.target.name]: e.target.value,
      [Date.now()]: "",
    };
  else
    return {
      ...state,
      [e.target.name]: e.target.value,
    };
};

const initialState = {
  [Date.now()]: "",
};

function ProsAndConsApp() {
  const [cons, dispatchCons] = useReducer(reducer, initialState);
  const [pros, dispatchPros] = useReducer(reducer, initialState);

  return (
    <div className="h-screen w-full relative bg-gray-300 pt-20">
      <Navbar>Why write clean code?</Navbar>
      <div className="mx-3 md:w-10/12 md:mx-auto mt-24 bg-gray-200 rounded-3xl shadow-2xl flex h-64 divide-x divide-gray-400">
        <div className="flex-1 h-full">
          <Banner classes="bg-green-600">
            <h4 className="text-center">Pros</h4>
            <i className="fas fa-check-circle block ml-2 -mb-1"></i>
          </Banner>
          <Column>
            {Object.entries(cons).map(([key, value]) => (
              <Item
                name={key}
                value={value}
                onChange={dispatchCons}
                color="text-green-500"
                key={key}
              />
            ))}
          </Column>
        </div>

        <div className="flex-1 h-full">
          <Banner classes="bg-red-700">
            <h4 className="text-center">Cons</h4>
            <i className="fas fa-times-circle block ml-2 -mb-1"></i>
          </Banner>
          <Column>
            {Object.entries(pros).map(([key, value]) => (
              <Item
                name={key}
                value={value}
                onChange={dispatchPros}
                color="text-red-600"
                key={key}
              />
            ))}
          </Column>
        </div>
      </div>
    </div>
  );
}

export default ProsAndConsApp;
