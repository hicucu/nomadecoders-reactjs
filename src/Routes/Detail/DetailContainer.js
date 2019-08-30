import React from "react";
import DetailPrenseter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
  }

  render() {
    console.log(this.props);
    const { result, error, loading } = this.state;
    return <DetailPrenseter result={result} error={error} loaing={loading} />;
  }
}
