import React, { Component } from "react";
import Content from "../../components/content";
import PageHeader from "../../components/page-header";
import PageContent from "../../components/page-content";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";
import {
  Theme,
  Tabs,
  Avatar,
  Input,
  Button,
  Select,
  Icon,
  DatePicker,
  Divider,
  Radio,
  Card,
  Grid,
  Tooltip,
  AutoComplete,
  Table,
  TimePicker
} from "@lugia/lugia-web";
const { Row, Col } = Grid;

const { RangePicker } = DatePicker;

const ItemContainer = styled.div`
  position: relative;
  height: auto;
  zoom: 1;
  display: inline-block;
  box-sizing: border-box;
  padding: 12px 0;
`;

const ItemInnerContainer = styled.div`
  box-sizing: border-box;
  margin-right: 5px;
`;
const ItemInputContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
`;
const TitleContainer = styled.label`
  position: relative;
  height: 25px;
  line-height: 25px;
  display: inline-block;
`;
const TitleText = styled.span`
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
`;
const SelectContainer = styled.div`
  vertical-align: bottom;
  display: inline-block;
`;

const routes = [
  {
    path: "/dashboard/analyse",
    title: "首页"
  },
  {
    title: "表单页"
  },
  {
    path: "/pages/form/advanced",
    title: "高级表单"
  }
];
const nameData = [
  {
    title: "仓库名:",
    placeholder: "请输入仓库名称"
  }
];
const workData = [
  {
    title: "任务名:",
    placeholder: "请输入"
  }
];
const workDesData = [
  {
    title: "任务描述:",
    placeholder: "请输入"
  }
];
const autoData = [
  {
    title: "仓库域名:",
    placeholder: "请输入",
    isAuto: true
  }
];
const managerData = [
  {
    title: "仓库管理员",
    isSelect: true,
    selectData: [
      { value: "付晓晓", label: "付晓晓" },
      { value: "周毛毛", label: "周毛毛" }
    ],
    selectView: {
      [Widget.Select]: {
        InputTag: {
          InputTagWrap: {
            normal: {
              width: 200
            }
          }
        }
      }
    },
    placeholder: "请选择管理员"
  }
];
const workerData = [
  {
    title: "执行人",
    isSelect: true,
    selectData: [
      { value: "付晓晓", label: "付晓晓" },
      { value: "周毛毛", label: "周毛毛" }
    ],
    selectView: {
      [Widget.Select]: {
        InputTag: {
          InputTagWrap: {
            normal: {
              width: 200
            }
          }
        }
      }
    },
    placeholder: "请选择管理员"
  }
];
const approvalData = [
  {
    title: "审批人",
    isSelect: true,
    placeholder: "请选择审批员",
    selectData: [
      { value: "付晓晓", label: "付晓晓" },
      { value: "周毛毛", label: "周毛毛" }
    ],
    selectView: {
      [Widget.Select]: {
        InputTag: {
          InputTagWrap: {
            normal: {
              width: 200
            }
          }
        }
      }
    }
  }
];
const responsibleData = [
  {
    title: "责任人",
    isSelect: true,
    placeholder: "请选择责任人",
    selectData: [
      { value: "付晓晓", label: "付晓晓" },
      { value: "周毛毛", label: "周毛毛" }
    ],
    selectView: {
      [Widget.Select]: {
        InputTag: {
          InputTagWrap: {
            normal: {
              width: 200
            }
          }
        }
      }
    }
  }
];
const workTypeData = [
  {
    title: "任务类型",
    isSelect: true,
    placeholder: "请选择任务类型",
    selectData: [
      { value: "私密", label: "私密" },
      { value: "公开", label: "公开" }
    ],
    selectView: {
      [Widget.Select]: {
        InputTag: {
          InputTagWrap: {
            normal: {
              width: 200
            }
          }
        }
      }
    }
  }
];
const inputView = {
  [Widget.Input]: {
    Container: {
      normal: {
        width: 200
      }
    }
  }
};

const getDataItem = (
  <ItemContainer>
    <ItemInnerContainer>
      <TitleContainer>
        <TitleText>{"生效日期"}</TitleText>
      </TitleContainer>
    </ItemInnerContainer>
    <ItemInputContainer>
      <RangePicker format={"YYYY-MM-DD"} />
    </ItemInputContainer>
  </ItemContainer>
);
const getWorkDataItem = (
  <ItemContainer>
    <ItemInnerContainer>
      <TitleContainer>
        <TitleText>{"生效日期"}</TitleText>
      </TitleContainer>
    </ItemInnerContainer>
    <ItemInputContainer>
      <TimePicker />
    </ItemInputContainer>
  </ItemContainer>
);

const getItem = data => () => {
  return data.map(item => {
    const {
      title,
      placeholder,
      isSelect,
      selectData,
      selectView,
      isAuto
    } = item;
    return (
      <ItemContainer>
        <ItemInnerContainer>
          <TitleContainer>
            <TitleText>{title}</TitleText>
          </TitleContainer>
        </ItemInnerContainer>
        <ItemInputContainer>
          {!isSelect &&
            !isAuto && (
              <Theme config={inputView}>
                <Input placeholder={placeholder} />
              </Theme>
            )}
          {isAuto && (
            <Theme config={inputView}>
              <AutoComplete placeholder={placeholder} />
            </Theme>
          )}
          {isSelect && (
            <Theme config={selectView}>
              <SelectContainer>
                <Select
                  createPortal
                  data={selectData}
                  displayField={"label"}
                  placeholder={placeholder}
                />
              </SelectContainer>
            </Theme>
          )}
        </ItemInputContainer>
      </ItemContainer>
    );
  });
};
const cardThemeConfig = {
  [Widget.Card]: {
    Container: {
      normal: {
        width: "100%",
        height: 400,
        margin: {
          bottom: 30
        }
      }
    },
    CardTitle: {
      normal: {
        height: 30,
        margin: {
          top: 20
        }
      }
    },
    CardContent: {
      normal: {
        padding: 0
      }
    }
  }
};

const columns = [
  {
    title: "成员名字",
    dataIndex: "name",
    key: "name",
    width: 100
  },
  {
    title: "工号",
    dataIndex: "id",
    key: "id",
    width: 100
  },
  {
    title: "所属部门",
    dataIndex: "address",
    key: "address",
    width: 200
  },
  {
    title: "操作",
    dataIndex: "",
    key: "operations",
    render: () => <a href="javascript:;">删除</a>
  }
];

const data = [
  { name: "Jack", id: 28, address: "some where", key: "1" },

  { name: "Rose", id: 36, address: "some where", key: "2" },

  { name: "Uzi", id: 36, address: "some where", key: "3" }
];

export default class TableList extends Component {
  render() {
    return (
      <Content>
        <PageHeader
          routes={routes}
          title={"基础表单"}
          desc={
            "表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
          }
        />,
        <PageContent>
          <Theme config={cardThemeConfig}>
            <Card
              title={"仓库管理"}
              content={
                <PageContent>
                  <Row>
                    <Col span={6}>{getItem(nameData)()}</Col>
                    <Col span={6} offset={2}>
                      {getItem(autoData)()}
                    </Col>
                    <Col span={6} offset={2}>
                      {getItem(managerData)()}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6}>{getItem(approvalData)()}</Col>
                    <Col span={16} offset={2}>
                      {getDataItem}
                    </Col>
                  </Row>
                </PageContent>
              }
            />
          </Theme>
          <Theme config={cardThemeConfig}>
            <Card
              title={"任务管理"}
              content={
                <PageContent>
                  <Row>
                    <Col span={6}>{getItem(workData)()}</Col>
                    <Col span={6} offset={2}>
                      {getItem(workDesData)()}
                    </Col>
                    <Col span={6} offset={2}>
                      {getItem(workerData)()}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6}>{getItem(responsibleData)()}</Col>
                    <Col span={6} offset={2}>
                      {getWorkDataItem}
                    </Col>
                    <Col span={6} offset={2}>
                      {getItem(workTypeData)()}
                    </Col>
                  </Row>
                </PageContent>
              }
            />
          </Theme>
          <Theme config={cardThemeConfig}>
            <Card
              title={"成员管理"}
              content={
                <PageContent>
                  <Table columns={columns} data={data} />
                </PageContent>
              }
            />
          </Theme>
        </PageContent>
      </Content>
    );
  }
}