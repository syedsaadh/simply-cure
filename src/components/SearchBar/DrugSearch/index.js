import React from 'react';
import { AutoComplete, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { debounce } from 'lodash';
import { Input } from '../../ui-components';
import { checkResponseCode, checkStatus } from '../../../utils/ApiUtils';
import DrugCatalogService from '../../../services/drugcatalog';

const { Option } = AutoComplete;

type DrugType = {
  default_dosage: null | string,
  default_dosage_unit: null | string,
  type: string,
  instruction: null | string,
  name: string,
};

interface Props extends FormComponentProps {
  placeholder: string;
  onSelect: (val: DrugType) => void;
  onSearch: Function;
  required: boolean;
  disabled?: boolean;
}

class ProcedureSearch extends React.Component<Props> {
  static defaultProps = {
    disabled: false,
  };
  constructor() {
    super();
    this.onSearch = this.onSearch.bind(this);
  }
  state = {
    dataSource: [],
    loading: false,
  };

  componentDidMount() {
    this.apiSearch = debounce((val) => {
      DrugCatalogService.searchDrugs(val)
        .then(checkStatus)
        .then(checkResponseCode)
        .then((response) => {
          this.setState({
            dataSource: response.Payload,
            loading: false,
          });
        })
        .catch(() => {
          this.setState({
            dataSource: [],
            loading: false,
          });
        });
    }, 500);
  }
  onSearch(val) {
    if (this.props.onSearch) this.props.onSearch(val);
    if (val.length < 2) return;
    this.setState({ loading: true });
    this.apiSearch(val);
  }
  renderOptions = () => {
    const { dataSource } = this.state;
    return dataSource.map((item: DrugType) => (
      <Option key={`${item.id}`} value={item.name} valObj={item}>
        {item.name} | {item.type}
      </Option>
    ));
  };
  render() {
    const {
      placeholder,
      onSelect,
      required,
      label,
      getFieldDecorator,
      name,
      disabled,
    } = this.props;
    const { loading } = this.state;
    return (
      <AutoComplete
        style={{ width: '100%' }}
        className="autocomplete-search-bar"
        dropdownClassName="autocomplete-search-dropdown"
        dataSource={this.renderOptions()}
        onSelect={(val, opt) => {
          onSelect(opt.props.valObj);
        }}
        optionLabelProp="value"
        disabled={disabled}
      >
        <Input
          autoComplete={false}
          label={label}
          required={required}
          placeholder={placeholder}
          name={name}
          getFieldDecorator={getFieldDecorator}
          suffix={loading ? <Icon type="loading" /> : null}
          onValueChange={this.onSearch}
        />
      </AutoComplete>
    );
  }
}
export default ProcedureSearch;
