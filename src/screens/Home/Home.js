import * as React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, SearchInput, FabButton } from '../../components/index';
import CountryObject from './CountryObject';

import {fetchCountries,changeSearchQuery} from '../../actions/countries'

import { homeStyles as styles } from './styles';

class Home extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchCountries());
    }
    onSearchButtonTouched = () => {
        const { searchQuery } = this.props;
        this.props.dispatch(fetchCountries(searchQuery));
        
    }

    onChangeSearchQuery = (text) => {
        this.props.dispatch(changeSearchQuery(text));
    }

    onFabButtonTouched = () => {
        this.props.dispatch(fetchCountries(''));

    }

    render() {
        const renderCountryItem = ({item}) =><CountryObject country={item} />
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <Header />
                    <SearchInput
                        placeholder='Ülke adını girin'
                        onPress={this.onSearchButtonTouched}
                        onChangeText={this.onChangeSearchQuery}
                        style={{ alignSelf: 'center' }}
                    />
                    <View style={styles.line} />
                    
                    <FlatList
                    data={this.props.countries}
                    renderItem={renderCountryItem}
                    keyExtractor={item=>item.name}
                    />

                </ScrollView>
                <FabButton
                    icon='refresh'
                    onPress={this.onFabButtonTouched}
                    style={styles.fabButton}
                />
            </View>
        );
    }
}

Home.propTypes = {
    dispatch: PropTypes.func,
    countries: PropTypes.array,
    searchQuery: PropTypes.string,
};

const stateToProps = (state) => {
    const {countries, searchQuery} = state.countries;
    return {
        countries,
        searchQuery,
    };
}

export default connect(stateToProps)(Home);