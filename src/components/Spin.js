import Loader from "react-loader-spinner";

export const Spin = ({ isLoaderVisible }) => {
  return (
    <div className="loader-styles">
      <Loader 
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        visible={isLoaderVisible}
      />
    </div>
  )
}