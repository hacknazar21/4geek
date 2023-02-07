import React, { Component, DetailedReactHTMLElement } from "react";
import TabBarNav from "./TabBarNav";

class MyComponent extends Component<any, any> {
  constructor(props) {
    super(props);
  }
  state = {
    activeTab: null,
  };
  componentDidMount() {
    const { children = [], defaultChecked = 0 } = this.props;
    let activeTab = this.getChildrenLabels(children)[defaultChecked];
    this.setActiveTab(activeTab);
  }
  static defaultProps = {
    children: null,
    classNames: [],
    component: null,
    alignToButtons: null,
    header: null,
    contentClass: "",
  };
  render() {
    const { activeTab } = this.state;
    const { children, header, component, alignToButtons } = this.props;
    return (
      <>
        <div className="tabs">
          {header}
          <div className="tabs__buttons">
            {this.renderTabs()}
            {alignToButtons}
          </div>
          {component}
        </div>
        {React.Children.map(
          children,
          (child: DetailedReactHTMLElement<any, any>) => {
            if (child?.props.label === activeTab) {
              return React.cloneElement(child, { activeTab });
            }
          }
        )}
      </>
    );
  }
  renderTabs() {
    const { children = [] } = this.props;
    const { activeTab } = this.state;

    return this.getChildrenLabels(children).map((navLabel) => (
      <TabBarNav
        key={navLabel}
        navLabel={navLabel}
        classNames={[activeTab === navLabel ? "active" : ""]}
        onChangeActiveTab={this.setActiveTab.bind(this)}
      />
    ));
  }
  getChildrenLabels(children) {
    return children.map((child) => child && child.props.label);
  }
  setActiveTab(activeTab) {
    const { activeTab: currentTab } = this.state;
    if (currentTab !== activeTab) {
      this.setState({
        activeTab,
      });
    }
  }
}

export default MyComponent;
