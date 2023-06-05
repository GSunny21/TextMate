import React from "react";

export default function About(props) {
  return (
    <div>
      <div className="container" style={{border: ((props.mode === 'dark') ? '0.5px solid #d7c7ca' : '0.5px solid black'),borderRadius: '12px' ,backgroundColor: ((props.mode==='dark') ? '#202020' : 'white'), color: ((props.mode==='dark') ? 'white' : 'black'), padding: '20px 15px'}}><strong style={{fontSize: '25px'}}>About TextUtils</strong><br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut
        exercitationem quia. Assumenda, quaerat eum esse nobis laborum placeat
        sit doloribus, id dolorum adipisci corporis fuga tenetur ad laboriosam
        ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        sequi facere doloremque nulla aliquid nisi id quae possimus illo
        deleniti eaque, accusantium vel velit culpa voluptatum rem. Esse
        possimus molestias laboriosam incidunt voluptates ipsa itaque unde et
        repellat architecto excepturi, eum, vitae voluptatibus earum pariatur
        aliquam, ratione doloribus? Ea, veniam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nemo sapiente, sed amet voluptatum debitis
        minima totam aliquid nostrum magni maiores reiciendis eveniet soluta
        obcaecati sint!
        <br />
        <br />
        <div style={{ position: "relative" }}>
          <div
            style={{
              // position: 'absolute',
              display: "inline-block",
              width: "400px",
              height: "200px",
              // left: '20px',
              justifyContent: "space-evenly",
            }}
          >
            <strong>
              Feature 1<br />
            </strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, optio
            provident cum qui earum illo voluptas dicta pariatur eos nemo? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolores
            velit nam rem iste delectus maiores asperiores reiciendis alias a.
          </div>
          <div
            style={{
              position: "absolute",
              display: "inline-block",
              width: "400px",
              height: "200px",
              left: "680px",
              justifyContent: "space-evenly",
            }}
          >
            <strong>
              Feature 2<br />
            </strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            architecto nostrum rem quae! Saepe reprehenderit atque distinctio,
            fugit tempore accusamus? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Sint qui, fugiat vero rerum quod laborum natus
            asperiores iusto numquam ea.
          </div>
          
        </div>
      </div>
    </div>
  );
}
