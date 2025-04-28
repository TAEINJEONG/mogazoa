import Category from '@/components/home/Category';
import Product from '@/components/home/Product';

const Index = () => {
  return (
    <div className="bg-black-500 text-gray-50 flex flex-row">
      <Category />
      <div>
        <Product />
      </div>
    </div>
  );
};

export default Index;
