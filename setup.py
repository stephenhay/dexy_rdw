from setuptools import setup, find_packages

setup(
        include_package_data = True,
        name='dexy_rdw',
        packages=find_packages(),
        description='Responsive Design Workflow templates for Dexy',
        url='https://github.com/stephenhay/dexy_rdw/',
        version="0.0.4",
        install_requires = [
            'dexy>=0.9.8'
            ]
        )
