import { useRef, useState } from "react";
import { Table, Input, Space, Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Container } from "./styled";

const{ Column } = Table;

const TeamTableComponent = (props) => {
    const { datas, isLoading } = props;
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (
        selectedKeys,
        confirm,
        dataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                        confirm({ closeDropdown: false });
                        setSearchText((selectedKeys)[0]);
                        setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>),
         filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
          ),
          onFilter: (value, record) =>
            record[dataIndex]
              .toString()
              .toLowerCase()
              .includes((value).toLowerCase()),
          onFilterDropdownOpenChange: visible => {
            if (visible) {
              setTimeout(() => searchInput.current?.select(), 100);
            }
          },
          render: text =>
            searchedColumn === dataIndex ? (
              <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text ? text.toString() : ''}
              />
            ) : (
              text
            ),
    })

    return (
        <Container>
            <Table loading={isLoading} dataSource={datas}>
                <Column 
                    key="User_id"
                    dataIndex="User_id" 
                    title="User ID" 
                    sorter={{compare: (a, b) => a.User_id - b.User_id}} 
                    {...getColumnSearchProps("User_id")} />
                <Column 
                    key="First_name"
                    dataIndex="First_name" 
                    title="First Name" 
                    sorter={{compare: (a, b) => a.First_name - b.First_name}} 
                    {...getColumnSearchProps("First_name")} />
                <Column 
                    key="Last_name"
                    dataIndex="Last_name" 
                    title="Last Name" 
                    sorter={{compare: (a, b) => a.Last_name - b.Last_name}} 
                    {...getColumnSearchProps("Last_name")} />
                <Column 
                    key="Overall_score"
                    dataIndex="Overall_score" 
                    title="Score" 
                    sorter={{compare: (a, b) => a.Overall_score - b.Overall_score}} />
            </Table>
        </Container>
    );
};

export default TeamTableComponent;