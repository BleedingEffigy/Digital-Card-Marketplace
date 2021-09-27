import { Cropper } from "react-cropper";
import SaveImageModalButton from "./save-image-modal";
import "cropperjs/dist/cropper.css"
import { useState } from "react";

const defaultSrc = "img/child.jpg";  
const CustomImageEditor = () => {
    const [image, setImage] = useState(defaultSrc);
    const [cropData, setCropData] = useState("img/blank400x600.png");
    const [cropper, setCropper] = useState();
    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
          files = e.dataTransfer.files;
        } else if (e.target) {
          files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL('image/png'));
        }
    };

    return (
    <div className="flex justify-center">
      <div className="w-full bg-gray-400">
        <input type="file" onChange={onChange} />
        <button>Use default img</button>
        <br />
        <br />
        <Cropper
          style={{height: "100%", width: "100%" }}
          aspectRatio={2 / 3}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={true}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            setCropper(instance);
          }}
          guides={true}
        />
      </div>
      <div className="flex flex-col max-h-screen">
        <div className="box p-2.5 box-border flex-grow" style={{ float: "right" }}>
          <h1>Preview</h1>
          <div  
            className="img-preview overflow-hidden"
            style={{ width: "100%", height: "300px" }}
          />
        </div>
        <div className="box p-2.5 box-border" style={{ width: "50%", float: "right", height: "300px" }}>
          <h1>
            <span>Crop</span>
            <SaveImageModalButton getCropData={getCropData} cropData={cropData}/>
          </h1>
        </div>
      </div>
      <br style={{ clear: "both" }} />
    </div>
    );
};

export default CustomImageEditor;